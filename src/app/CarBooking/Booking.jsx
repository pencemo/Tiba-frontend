import { useState } from "react";
import { useParams } from "react-router-dom";
import { useOneCar } from "@/hooks/QueryHooks/useCars";
import { usePorfile } from "@/Context/ProfileContext";
import SuccessPopup from "@/components/Booking/Success";
import Loader from "@/components/ui/loader";
import UserNav from "@/components/User/UserNav";
import CarImageGallery from "@/components/Booking/CarImageGallery";
import CarSpecifications from "@/components/Booking/CarSpecifications";
import BookingForm from "@/components/Booking/BookingForm";
import { Star } from "lucide-react";
import FailPopup from "@/components/Booking/FailMsg";
import StripeElement from "@/components/Booking/StripeElement";

export default function ProductPage() {
  const { id } = useParams();
  const { profile } = usePorfile();
  const [formData, setFormData] = useState({
    name: profile.name || "",
    email: profile.email || "",
    contact: profile.phone || "",
    userId: profile._id || "",
    carId: "",
    showroomId: "",
    totalCost: 0,
    date: '',
  });
  
  const { data: carData, isLoading } = useOneCar(id);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  if (isLoading) return <div className="w-full h-screen"><Loader /></div>;
  if (!carData?.data) return <div>Car not found</div>;
  
  


  return (
    <div className="min-h-screen bg-background">
      <UserNav />

      {showSuccess?
      <StripeElement formData={formData} setFormData={setFormData} car={carData.data}/> 
      :<main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <CarImageGallery images={carData?.data?.images} />

          <div className="space-y-5">
            <CarHeader car={carData.data} />
            <CarSpecifications car={carData.data} />

            <BookingForm
              formData={formData}
              setFormData={setFormData}
              profile={profile}
              car={carData.data}
              onSuccess={() => setShowSuccess(true)}
              onFail={() => setShowFail(true)}
            />
          </div>
        </div>
      </main>}
            {/* <StripeElement/> */}

      {/* <SuccessPopup
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      /> */}
      <FailPopup
        isVisible={showFail}
        onClose={() => setShowFail(false)}
      />
    </div>
  );
}

function CarHeader({ car }) {
  return (
    // <div>
    //   <h1 className="text-3xl font-semibold mb-2">
    //     {car.make} {car.model}
    //   </h1>
    //   <p className="text-2xl font-bold mb-4">
    //     {car.daily_rate.$numberDecimal} AED
    //     <span className="text-sm font-normal text-gray-500">/day</span>
    //   </p>
    // </div>
    <>
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {car.category || "NO CATEGORY"}
        </p>
        <h1 className="text-3xl font-semibold mb-4 text-foreground">
          {car.make} {car.model}
        </h1>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <span className="text-sm text-muted-foreground">8/10, 15 Reviews</span>
        </div>
        <div className="flex max-md:flex-col gap-x-2 mt-5">
        <p className="text-2xl font-bold text-navy-600 dark:text-zinc-200">
          {car.daily_rate.$numberDecimal} AED
          <span className="text-sm font-normal text-muted-foreground">/day</span>
        </p>
        <p className="text-2xl font-bold text-navy-600 dark:text-zinc-200">
          {car.weekly_rate.$numberDecimal} AED
          <span className="text-sm font-normal text-muted-foreground">/week</span>
        </p>
        <p className="text-2xl font-bold text-navy-600 dark:text-zinc-200">
          {car.monthly_rate.$numberDecimal} AED
          <span className="text-sm font-normal text-muted-foreground">/month</span>
        </p>
        </div>
      </div>

      {/* <p className="text-gray-600">
        Premium & comfortable memory foam with a strong structure built with
        teakwood, it feels amazing.
      </p> */}
    </>
  );
}
