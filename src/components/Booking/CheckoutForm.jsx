import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useCrateBooking } from "@/hooks/QueryHooks/useBookings";

export default function CheckoutForm({formData, setFormData, showSuccess}) {
  const stripe = useStripe();
  const elements = useElements();
  const {mutate}= useCrateBooking()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isLoading) {
      return;
    }

    if(!formData.name || !formData.email || !formData.contact){
      setError(true)
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent  } = await stripe.confirmPayment({
      elements,
      // confirmParams: {
      //   return_url: window.location.origin + "/user", // Change if needed
      // },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message || "An error occurred.");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // onPaymentSuccess?.();
      showSuccess()
      mutate({ ...formData, paymentIntentId: paymentIntent.id });
      setError(false)
    }

    setIsLoading(false);
  };



  return (
    <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-5 space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          error={error}
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <FormField
          label="Email"
          name="email"
          error={error}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
        <FormField
          label="Contact No"
          name="contact"
          error={error}
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
        />
        </div>
      <PaymentElement id="payment-element" options={{layout:"auto"}} />
      <Button disabled={!stripe || !elements} className='w-full mt-4' >
          {isLoading ? <Loader2 className="animate-spin" /> : "Pay now"}
      </Button>
      {/* Show any error or success messages */}
      {message && <div className="text-sm text-center mt-2 text-red-500">{message}</div>}
    </form>
  );
}

function FormField({ label, error, ...props }) {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        <Input {...props} className={error ? "border-red-500" : ""} />
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
      </div>
    );
  }
  