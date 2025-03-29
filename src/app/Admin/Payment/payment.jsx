import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight} from "lucide-react"
import {format} from 'date-fns'
import { useAllPayments } from "@/hooks/QueryHooks/usePayment"
import Loader from "@/components/ui/loader"
import { Badge } from "@/components/ui/badge"

export function Payment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { data, error, isLoading } = useAllPayments(currentPage*limit, limit);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (data && data.items) {
      setFilteredUsers(data.items);
      // console.log(data);
    }
  }, [data]);

  const filterUsers = (term) => {
    if (data && data.items) {
      const filtered = data.items.filter(
        (item) =>
          item.order_id.toLowerCase().includes(term.toLowerCase()) ||
          item.email.toLowerCase().includes(term.toLowerCase()) 
          // item.role.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredUsers(filtered);
    }
  };

  

  if (isLoading) {
    return <div className="w-full h-full"><Loader/></div>;
  }
  if (error) {
    return <div className="w-full h-full text-sm font-medium">{error.message}</div>;
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
                <TableHead className="">Order ID</TableHead>
                <TableHead className="w-[200px] " >
                  Contact
                </TableHead>
                <TableHead className="" >
                  Email
                </TableHead>
                <TableHead className="">
                Status
                </TableHead>
                <TableHead className=" " >
                  Amount
                </TableHead>
                <TableHead className=" " >
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i+1}</TableCell>
                  <TableCell className="italic">{item.order_id}</TableCell>
                  <TableCell className="font-medium">{item.contact}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {item.status === "captured"
                    ? <Badge variant="success" className='capitalize' >{item.status}</Badge>
                    : item.status === "failed"
                    ? <Badge variant="destructive" className='capitalize' >{item.status}</Badge>
                    : item.status === "authorized"
                    ? <Badge variant="outline" className='capitalize' >{item.status}</Badge>
                    : <Badge variant="secondary" className='capitalize' >{item.status}</Badge>
                    }
                  </TableCell>
                  <TableCell>{item.amount/100} <span className="text-xs text-muted-foreground">{item.currency}</span> </TableCell>
                  <TableCell className="">{format(new Date(new Date(item.created_at * 1000)), "PPP")}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} 
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1))}
            // disabled={currentPage === totalPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
        </div>
      </div>
    </div>
  );
}
