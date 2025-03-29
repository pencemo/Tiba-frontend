import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "@/API/services/authService";
import { useToast } from "@/hooks/use-toast";

import OTP from "./OTP";
import { ChangePass } from "./ChangePass";
import { Loader2 } from "lucide-react";
import ChangeSucsess from "./ChangeSuccess";

export function ForgotForm({ className, ...props }) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [loding, setLoading]=useState(false)
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const data = await authService.sendOTP({ email });
      if (!data.success) {
        setError(data.message);
        toast({
          title: "Cant Sent OTP",
          description: data.message + " Please try again",
        });
        return;
      } else {
        setError("");
        toast({
          title: "OTP Sent",
          description: "OTP sent to your email successfully",
        });
        setStep(1);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally{
      setLoading(false)
    }
  };

  if(success) return <ChangeSucsess />
  return (
    <div className={cn("flex flex-col  ", className)} {...props}>
      <div className="flex flex-col items-center gap-2 mb-4 text-center">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Submit your email address to reset your password
        </p>
      </div>
      {step === 0 ? (
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              className={
                (error === "Please provide a email" && !email) ||
                error === "User not found"
                  ? "border-red-500"
                  : ""
              }
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
          {loding ? <Loader2 className="animate-spin" /> :"Send OTP"}
          </Button>
        </div>
      ) : step === 1 ? (
        <OTP next={() => setStep(2)} resendOtp={handleSubmit} email={email} />
      ) : (
        <ChangePass email={email} success={()=>setSuccess(true)} />
      )}
      
      <div className="text-center text-sm mt-3">
        Don&apos;t have an account?{" "}
        <Link to={"/signup"} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      {step > 0 && (
        <div className="text-center text-sm mt-1">
          <button onClick={() => setStep(step - 1)}>Back</button>
        </div>
      )}
    </div>
  );
}
