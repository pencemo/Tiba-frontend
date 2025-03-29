import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  AllBookmarkIcon,
  BitcoinWalletIcon,
  Calendar03Icon,
  UserMultiple02Icon,
} from "hugeicons-react";
import { format } from "date-fns";

function DashbordCards({data}) {
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <UserMultiple02Icon size={20} className="text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.totalUsers || 0}</div>
          <p className="text-xs text-muted-foreground">Total signup users</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          <AllBookmarkIcon size={20} className="text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.totalBooking || 0}</div>
          <p className="text-xs text-muted-foreground">
            Total booking from all time
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Bookin of This Month
          </CardTitle>
          <Calendar03Icon size={20} className="text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.thisMonthBooking || 0}</div>
          <p className="text-xs text-muted-foreground">
            Form {format(new Date(), "MMM")} 1 to {format(new Date(), "PP")}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <BitcoinWalletIcon size={20} className="text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.totalAmount?.$numberDecimal || 0}
          </div>
          <p className="text-xs text-muted-foreground">
            Total amount of booking
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashbordCards;
