import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import {format} from 'date-fns'
import { useAllBookings } from "@/hooks/QueryHooks/useBookings"
import { Badge } from "@/components/ui/badge"
import Loader from "@/components/ui/loader"
import NoData from "@/components/Error/NoData"
import { isBefore, isAfter, isToday } from 'date-fns';

export default function UserBookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, error, isError, isLoading } = useAllBookings(currentPage, limit);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (data && data.data) {
      setFilteredUsers(data.data);
    }
    if (data){
      setTotalPage(data.totalPages);
    }
  }, [data]);

  const filterUsers = (term) => {
    if (data && data.data) {
      const filtered = data.data.filter(
        (user) =>
          user.name.toLowerCase().includes(term.toLowerCase()) ||
          user.email.toLowerCase().includes(term.toLowerCase()) ||
          user.role.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredUsers(filtered);
    }
  };

  

  if (isLoading) {
    return <div className="w-full h-screen"><Loader/></div>;
  }
  if (error || isError) {
    return <div>Error: {error.message}</div>;
  }

  if(filteredUsers.length === 0){
    return <div className="w-full h-20"><NoData/></div>;
  }
  return (
    <div className="max-w-[85rem] w-full p-3 mx-auto overflow-x-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterUsers(e.target.value);
            }}
            className="max-w-sm"
          />
          <Select value={limit.toString()} onValueChange={(value) => setLimit(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
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
                  Booked at
                </TableHead>
                <TableHead className=" " >
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((item, i) => {
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

                return <TableRow key={i}>
                  <TableCell className="font-medium">{i+1}</TableCell>
                  
                  <TableCell className="font-medium">{item.carId.make} {item.carId.model}</TableCell>
                  <TableCell>{item.totalCost.$numberDecimal}</TableCell>
                  {/* <TableCell>{item.contact}</TableCell> */}
                  <TableCell className="">{format(new Date(item.date.from), "dd MMM, yy")} - {format(new Date(item.date.to), "dd MMM, yy")}</TableCell>
                  <TableCell className="">{format(new Date(item.createdAt), "dd MMM yyyy")}</TableCell>
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
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPage}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
            disabled={currentPage === totalPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(totalPage)}
            disabled={currentPage === totalPage}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


