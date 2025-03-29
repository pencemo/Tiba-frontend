import { useEffect, useState } from "react";
// import { DatePickerWithRange } from "../ui/datePicker";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { paymentServices } from "@/API/services/paymentService";
import { DatePickerWithRange } from "../ui/datePicker";
import { format } from "date-fns";
import { bookingService } from "@/API/services/bookingService";
import { Loader2 } from "lucide-react";

export default function BookingForm({ profile, car, formData, setFormData, onSuccess }) {
  const [dateRange, setDateRange] = useState({
    from: null,
    to: null,
  });
  
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name: profile.name || "",
      email: profile.email || "",
      contact: profile.phone || "",
      userId: profile._id || "",
      carId: car._id || "",
      showroomId: car.showroomId || "",
      totalCost: 0,
      date: dateRange,
    }))
  }, [])

  useEffect(() => {
    // Calculate days difference
    const calculateTotal = () => {
      if (!dateRange) {
        return 0;
      }
      if (!dateRange.from || !dateRange.to) {
        return 0;
      }

      const from = new Date(dateRange.from);
      const to = new Date(dateRange.to);
      const timeDiff = to.getTime() - from.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; 
      if(days < 7){
        return days * parseFloat(car.daily_rate.$numberDecimal);
      }
      if(days >= 7 && days < 30){
        const weeklyRate = car.weekly_rate.$numberDecimal/7
        return days * parseFloat(weeklyRate);
      }
      if(days >= 30){
        const monthlyRate = car.monthly_rate.$numberDecimal/30
        return days * parseFloat(monthlyRate);
      }
      // return days * parseFloat(car.daily_rate.$numberDecimal);
    };

    setFormData((prev) => ({
      ...prev,
      totalCost: calculateTotal(),
      userId: profile._id,
      carId: car._id,
      showroomId: car.showroomId,
      date: dateRange,
    }));
  }, [dateRange, car, profile]);

  const [dateCheck, setDateCheck] = useState(false);
  const [dateMsg, setDateMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(dateCheck){
      onSuccess()
    }
  };

  

  const handleCheckDate = async () => {
    // Check date logic here
    if (!dateRange || !dateRange.from || !dateRange.to){
      return alert("Please select a date range");
    }
    setIsLoading(true);
    const response = await bookingService.dateCheck({carId:car._id, date : dateRange});
    if(response){
      setDateCheck(response.success);
      setDateMsg(response.message);
    }
    setIsLoading(false);
  }
  return (
    <div className="space-y-4 border-t pt-6">
      
        <div className="space-y-2">
          <Label>Rental Period</Label>
          <DatePickerWithRange
            date={dateRange}
            setDate={setDateRange}
            className="w-full"
          />
        </div>

        <div className="flex max-md:flex-col gap-4 md:divide-x">
          <div className="">
            <h1 className="text-muted-foreground text-sm">Total Amount</h1>
            <h1 className="md:text-3xl text-xl text-navy-600 dark:text-zinc-200 font-bold">{formData.totalCost.toFixed(2)} AED</h1>
            <h1 className="text-muted-foreground text-sm">for your selected days</h1>
            {/* <h1 className="text-muted-foreground text-sm">Estimate {differenceInDays(dateRange?.to ? dateRange.to : new Date(), dateRange?.from ? dateRange.from : new Date())+1} Days</h1> */}
          </div>
          <div className="md:pl-5">
            <h1 className="text-muted-foreground text-sm">Selected Dates</h1>
            <p className="text-foreground text-sm font-medium mt-1">{dateRange?.from  ? format( dateRange.from, "PP"): 'No from date selected'}</p>
            <p className="text-foreground text-sm font-medium">{dateRange?.to ? format(dateRange.to, "PP"): "No to date selected" }</p>
          </div>
        </div>
        <div >
          {dateMsg !=='' && dateCheck &&
            <p className="text-emerald-700 text-sm p-3 rounded-md bg-emerald-50">{dateMsg}</p>
          }
          {dateMsg !=='' && !dateCheck &&
            <p className="text-red-700 text-sm p-3 rounded-md bg-red-50">{dateMsg}</p>
          }
        </div>
      <div className="flex max-md:flex-col gap-4 pt-2">
        <Button onClick={handleCheckDate} className="flex-1 bg-background text-foreground border border-foreground hover:bg-gray-100 dark:hover:bg-zinc-800">
            {isLoading? <Loader2 className="animate-spin" />:'CHECK AVAILABILITY'}
        </Button>
        <Button disabled={!dateCheck} onClick={handleSubmit}  className="flex-1">BOOK NOW</Button>
      </div>

    </div>
  );
}

