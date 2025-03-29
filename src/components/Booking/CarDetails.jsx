import { useEffect, useState } from "react";
import { Star, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import UserNav from "../User/UserNav";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useParams } from "react-router-dom";
import { useOneCar } from "@/hooks/QueryHooks/useCars";
import Loader from "../ui/loader";
import { format } from "date-fns";
import { DatePickerWithRange } from "../ui/datePicker";
import { paymentServices } from "@/API/services/paymentService";
import { usePorfile } from "@/Context/ProfileContext";
import SuccessPopup from "./Success";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });
  const [carData, setCardata] = useState([]);
  const [isError, setError] = useState(false);
  const { profile } = usePorfile();
  const { data, error, isLoading } = useOneCar(params.id);
  const [isVisible, setVisible]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    userId: "",
    carId: "",
    date: date,
    totalCost: "",
    status: "pending",
    showroomId: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data && data.data) {
      setCardata(data.data);
      const timeDifference = date.to - date.from;
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      const totalAmount = daysDifference * data.data.daily_rate.$numberDecimal;
      setFormData({
        ...formData,
        totalCost: totalAmount.toFixed(2),
        showroomId: data.data.showroomId,
        carId: data.data._id,
      });
    }
  }, [data, profile, date]);

  useEffect(() => {
    setFormData({ ...formData, userId: profile._id });
  }, [profile]);

  const handlePayment = async () => {
    if(formData.name === "" || formData.email === "" || formData.contact === "" ){
      setError(true)
      return
    }
    setFormData({ ...formData, date: date });
    const order = await paymentServices.createOrder({
      amount: 1,
      currency: "INR",
      receipt: "order_receipt_1",
    });

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    const options = {
      key: keyId,
      amount: order.amount,
      currency: order.currency,
      name: "Tiba",
      description: "Transaction",
      order_id: order.id,
      handler: async function (response) {
        const verificationResult = await paymentServices.verifyPayment({
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          formData,
        });

        // const verificationResult = await verificationResponse.json();
        if (verificationResult.success) {
          setVisible(true)
        } else {
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
      theme: {
        color: "#000",
      },
    };

    let rzp = window.Razorpay(options);
    rzp.open();
    setError(false)
  };

  const images = [
    "https://img.gaadicdn.com/images/car-images/360x240/Kia/Syros/11791/1734601434303/223_Pewter-Olive_32352a.jpg",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/168707/syros-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedImage((selectedImage + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  const colorOfCar = { background: carData.color };

  if (isLoading)
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  if (error) return <div>Error</div>;
  return (
    <div className="min-h-screen bg-white">
      <UserNav />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square border relative bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                className="object-contain w-full h-full p-8"
              />
            </div>
            <div className="flex justify-center items-center space-x-4">
              {images.map((item, i) => (
                <div
                  onClick={() => setSelectedImage(i)}
                  className="w-20 h-14 border rounded-lg overflow-hidden"
                >
                  <img
                    key={i}
                    src={item}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 bg-[#f1 f2f7]">
            <div>
              <p className="text-sm text-gray-500 mb-2">
                {carData.category || "NO CATEGORY"}
              </p>
              <h1 className="text-3xl font-semibold mb-4">
                {carData.make} {carData.model}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <span className="text-sm text-gray-600">8/10, 15 Reviews</span>
              </div>
            </div>

            <p className="text-gray-600">
              Premium & comfortable memory foam with a strong structure built
              with teakwood, it feels amazing.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-8 items-center">
                <div className="flex flex-col items-center">
                  <p className="font-medium mb-2">Color</p>
                  <div className="flex space-x-2">
                    <button
                      style={colorOfCar}
                      className="w-6 h-6 rounded-full bg- gray-400 ring-2 ring-offset-2 ring-navy-600"
                    />
                  </div>
                </div>
                <div>
                <p className="font-medium mb-2">Year</p>
                  <p className="font-semibold capitalize">
                    {carData.year}
                  </p>
                </div>
              </div>
              <div className="flex space-x-8">
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-semibold capitalize">
                    {carData.transmission}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <p className="font-semibold capitalize">
                    {carData.fuel_type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Seats</p>
                  <p className="font-semibold capitalize">{carData.seats} seats</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-bold">
                {carData?.daily_rate?.$numberDecimal} AED{" "}
                <span className="text-sm font-normal text-gray-500">/day</span>
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <form className="space-y-4 mb-10 ">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      onChange={handleInputChange}
                      className={isError && formData.name === '' ? 'border-red-500' :""}
                      value={formData.name}
                      name="name"
                      id="fullName"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      onChange={handleInputChange}
                      className={isError && formData.email === '' ? 'border-red-500' :""}
                      value={formData.email}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact No</Label>
                    <Input
                      onChange={handleInputChange}
                      className={isError && formData.contact === '' ? 'border-red-500' :""}
                      value={formData.contact}
                      name="contact"
                      id="contact"
                      placeholder="Contact no"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Start and End Date</Label>
                    <DatePickerWithRange
                      className="w-full"
                      date={date}
                      setDate={setDate}
                    />
                  </div>
                </div>

              </form>
              <div className="flex space-x-4 sticky bottom-0 py-3  bg-white">
                <Button className="flex-1 bg-white text-black border border-black hover:bg-gray-100">
                  SEND ENQUARY
                </Button>
                <Button onClick={handlePayment} className="flex-1">
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SuccessPopup isVisible={isVisible}/>
    </div>
  );
}
