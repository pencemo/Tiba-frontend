import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {format} from 'date-fns'
import { Badge } from "@/components/ui/badge"
import { isBefore, isAfter, isToday } from 'date-fns';

export default function Upcoming({data}) {
  
  if(data.length === 0) {
    return <div>
        <h1 className="text-2xl font-bold text-center mt-10 text-muted-foreground">You have no upcoming bookings</h1>
    </div>
  }
  return (
    <div className=" w-full overflow-x-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Upcoming bookings</h1>
          
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader className='text-nowrap'>
              <TableRow>
                <TableHead className="w-[50px]">No</TableHead>
                <TableHead className="w-[200px] " >
                  Car Name
                </TableHead>
                <TableHead className="" >
                  Total Cost
                </TableHead>
                <TableHead className="">
                Date of booking
                </TableHead>
               
                <TableHead className=" " >
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, i) => {
                const from = new Date(item.date.from);
                const to = new Date(item.date.to);
                const now = new Date();

                let Status
                if (isToday(from)) {
                  Status = "Today"
                } else if (isBefore(from, now)) {
                  Status = "Past"
                } else if (isAfter(to, now)) {
                  Status = "Upcoming"
                } else if (isAfter(now, from) && isBefore(now, to)) {
                  Status = "Ongoing"
                }

                return <TableRow className='text-nowrap' key={i}>
                  <TableCell className="font-medium">{i+1}</TableCell>
                  
                  <TableCell className="font-medium">{item.carId.make} {item.carId.model}</TableCell>
                  <TableCell>{item.totalCost.$numberDecimal}</TableCell>
                  {/* <TableCell>{item.contact}</TableCell> */}
                  <TableCell className="">{format(new Date(item.date.from), "dd MMM, yy")} - {format(new Date(item.date.to), "dd MMM, yy")}</TableCell>
                  <TableCell className="">{Status}</TableCell>
                  <TableCell className="capitalize">
                    {item.status === "pending" ? (
                      <Badge variant="destructive">
                        {item.status}
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        {item.status}
                      </Badge>
                    )}
                  </TableCell>
                  
                  
                </TableRow>}
              )}
            </TableBody>
          </Table>
        </div>
        
      </div>
    </div>
  );
}


