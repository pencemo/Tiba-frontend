import Cards from "@/components/User/userpages/Cards";
import Upcoming from "@/components/User/userpages/Upcoming";
import Loader from "@/components/ui/loader";
import { useUserData } from "@/hooks/QueryHooks/useUserService";
import React from "react";

function UserHome() {
  const { data, isLoading, error } = useUserData();

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-screen text-center text-2xl">
        {error.message}
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-7 gap-4 md:gap-x-10">
      <div className="md:col-span-2">
        <Cards
          totalBookings={data?.data?.totalBookings || 0}
          totalBookingAmout={data?.data?.totalBookingAmout?.$numberDecimal || 0}
        />
      </div>
      <div className="md:col-span-5 overflow-hidden">
        <Upcoming data={data?.data?.upcoming || []} />
      </div>
    </div>
  );
}

export default UserHome;
