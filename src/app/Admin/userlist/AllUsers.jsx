import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { useUserList } from "@/hooks/QueryHooks/useUserList"
import {format} from 'date-fns'
import { useChangeStatus } from "@/hooks/QueryHooks/useAdmin"
import { useToast } from "@/hooks/use-toast"
import Loader from "@/components/ui/loader"
import { Switch } from "@/components/ui/switch"

export function AllUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {mutate, isError, isSuccess}=useChangeStatus()
  const { data, error, isLoading } = useUserList(currentPage, limit);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const {toast}=useToast()

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

  const handelChangeStatus=(id,status)=>{
    mutate({id,status}, {
      onSuccess: (data) => {
        if(data.success){
          toast({
            title: "Success",
            description: "Status changed successfully",
            variant: "success",
          })
        }else{
          toast({
            title: "Error",
            description: "Something went wrong",
            variant: "destructive",
          })
        }
      },
    })
    if(isError){
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return <div className="w-full h-full"><Loader/></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
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
                <TableHead className="w-[50px]">Avatar</TableHead>
                <TableHead >
                  Name
                </TableHead>
                <TableHead className="" >
                  Email
                </TableHead>
                <TableHead className="">
                Verified
                </TableHead>
                <TableHead className=" " >
                  Date
                </TableHead>
                <TableHead className=" " >
                  
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i+1}</TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.isVerified? 'Verified': 'Not Verified'}</TableCell>
                  <TableCell className="">{format(new Date(user.createdAt), "dd MMM yyyy")}</TableCell>
                  <TableCell className="">
                    {/* <Button onClick={()=>handelChangeStatus(user._id, user.isActive)} className="px-3 h-8 w-full max-w-28">
                    {user.isActive? 'De Activate': 'Activate'}
                    </Button> */}
                    <Switch checked={user.isActive} onCheckedChange={()=>handelChangeStatus(user._id, user.isActive)} />
                    </TableCell>
                </TableRow>
              ))}
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
