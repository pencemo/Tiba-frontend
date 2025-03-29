import Frame from "@/components/User/Tabs";
import UserNav from "@/components/User/UserNav";
import React from "react";
import { Outlet } from "react-router-dom";

export default function UserDashbord() {
  
  return (
    <div>
      <UserNav/>
      <Frame/>
      <div className="max-w-[85rem] mt-5 mx-auto h-screen px-4 sm:px-6 lg:px-8 ">
        <Outlet/>
      </div>
    </div>
  );
}
