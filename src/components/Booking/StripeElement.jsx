import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axiosInstance from "@/API/axiosConfig";
import Loader from "../ui/loader";
const stipePubKey = import.meta.env.VITE_STRIPE_PUB_KEY;
const stripePromise = loadStripe(stipePubKey);
const url = import.meta.env.VITE_API_BASE_URL

export default function StripeElement({car, formData, setFormData}) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
        
        const response = await axiosInstance.post("/api/payment/create-payment", { currency: "inr", amount: 1000 })
        
        if(response.data.success){
          setClientSecret(response.data.clientSecret)
        }
    }
    createPaymentIntent();

  }, []);

  const appearance = {
    theme: 'stripe',
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = 'auto';

  return (
    
      <div className="grid md:grid-cols-7 gap-x-10 gap-y-5 max-w-[70rem] mx-auto my-10 px-4 sm:p-6">
        <div className="md:col-span-4">
        
        <div className="w-full max-w-xl mb-5 border bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
        <img
          src={url+car.images[0]}
          className="object-contain w-full h-full"
          alt="Car preview"
        />
      </div>
        <p className="text-sm text-muted-foreground">
          {car.category || "NO CATEGORY"}
        </p>
        <h1 className="text-xl font-medium mb-2 text-foreground">
          {car.make} {car.model}
        </h1>
        <h1 className="text-3xl font-bold text-foreground">
          Pay {formData.totalCost} AED
        </h1>
        </div>
        <div  className="shadow-2xl w-full  md:col-span-3 p-6 md:p-8 rounded-2xl border bg-white">

        {clientSecret ? (
          <Elements options={{clientSecret, appearance: {theme:"flat" }, loader}} stripe={stripePromise}>
            <CheckoutForm formData={formData} setFormData={setFormData} />
          </Elements>
        ) : <Loader/>}
        </div>
      </div>
  );
}