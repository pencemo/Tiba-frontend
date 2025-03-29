import { useState } from "react";
import DashbordCards from "@/components/Admin/dashCards";
import NewUser from "../../../components/Admin/NewUser";
import NewBooking from "@/components/Admin/NewBookings";
import { AdminChart } from "@/components/Admin/AdminChart";
import { BookingChart } from "@/components/Admin/BookingChart";
import { useDashbordData } from "@/hooks/QueryHooks/useAdmin";
import Loader from "@/components/ui/loader";

function Dashboard() {
  const { data, error, isLoading } = useDashbordData();
  if (isLoading)
  return (
    <div className="w-full h-full">
      <Loader />
    </div>
  );
if (error) return <div className="flex items-center justify-center font-medium capitalize">{error.message}</div>;
  return (
    <div className="max-w-[85rem] mx-auto mt-4">
      <div className="flex-1 space-y-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          
        </div>

        <DashbordCards data={data?.data} />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1 w-full">
            <AdminChart data={data?.data?.chartData} />
          </div>
          <div className="md:col-span-1 ">
            <BookingChart data={data?.data?.bookingDetails} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 w-full">
          <NewBooking />
          <NewUser />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
