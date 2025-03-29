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
import { useAllAdmin, useChangeStatus } from "@/hooks/QueryHooks/useAdmin"
import { AddAdmin } from "@/components/ManageAdmin/AddAdmin"
import { useAllShowroom } from "@/hooks/QueryHooks/useShowroom"
import Loader from "@/components/ui/loader"
import { Switch } from "@/components/ui/switch"

export function AdminList() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useAllAdmin();
  const {data: showrooms}=useAllShowroom()
  const [filteredUsers, setFilteredUsers] = useState([]);
  const {mutate}=useChangeStatus()

  useEffect(() => {
    if (data && data.data) {
      setFilteredUsers(data.data);
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

  const handleChangeStatus = (id, status) => {
    const data = {id, status}
    mutate( data);
  }

  if (isLoading) {
    return <div className="w-full h-full"><Loader/></div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[85rem] w-full mx-auto overflow-x-auto mt-10">
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
          <div className="flex gap-2 items-center">
          
          {/* <Select  onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select rows per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
            </SelectContent>
          </Select> */}
          
            <AddAdmin/>
          </div>
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
                <TableHead className="" >
                  Showroom name
                </TableHead>
                <TableHead className="">
                 Status
                </TableHead>
                <TableHead className=" " >
                  Date
                </TableHead>
                <TableHead className=" " >
                  
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user, i) => {
                const showroomName = showrooms && showrooms.data.find((showroom) => showroom._id === user.showroomId)?.name;
                return (
                  <TableRow key={i}>
                  <TableCell className="font-medium">{i+1}</TableCell>
                  <TableCell>
                    <Avatar>
                      {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{showroomName}</TableCell>
                  <TableCell>{user.isActive? 'Active': 'Not Active'}</TableCell>
                  <TableCell className="">{format(new Date(user.createdAt), "dd MMM yyyy")}</TableCell>
                  <TableCell className="">
                    {/* <Button onClick={()=>handleChangeStatus(user._id, user.isActive)}  className="text-sm">
                    {user.isActive? 'De Activate': 'Activate'}
                    </Button> */}
                    <Switch
                     checked={user.isActive}
                     onCheckedChange={()=>handleChangeStatus(user._id, user.isActive)}
                    />
                    </TableCell>
                </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
