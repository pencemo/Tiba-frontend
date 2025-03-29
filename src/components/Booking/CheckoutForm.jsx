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

export default function CheckoutForm({formData, setFormData}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isLoading) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/complete",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
        console.log(error);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };



  return (
    <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-5 space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
        <FormField
          label="Contact No"
          name="contact"
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
  