import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminMutation } from "@/hooks/QueryHooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useAllShowroom } from "@/hooks/QueryHooks/useShowroom";

export function AddAdmin() {
    const [error, serError]=useState(false)
    const {data}=useAllShowroom()
    const {toast}=useToast()
    const {mutate}=useAdminMutation({
      onSuccess: () => {
        toast({
          title: "Admin added",
          description: "Admin added successfully",
          variant: "success",
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Error adding admin",
          variant: "error",
        });
      },
    })

  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
    showroomId: '',
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCancel = () => {
    // Reset form data
    setFormData({
        name: '',
        email: "",
        password: "",
        showroomId: '',
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    serError(false)
    if(formData.name == '' ||   formData.email == '' || formData.password == '' || formData.showroomId == ''){
        return serError(true)
    }
    
    mutate(formData)
    handleCancel()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="">Add Admin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Add Admins</DialogTitle>
          <DialogDescription>
            Add admin details and showroom details and submit the form.
          </DialogDescription>
        </DialogHeader>
        
        <div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
                placeholder="Name of admin"
                className={error && formData.name == ''? 'border-red-500' : ''}
              />
            </div>
        </div>
        
        <div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Email"
                className={error && formData.email == ''? 'border-red-500' : ''}
              />
            </div>
        </div>
        <div className="mb-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                placeholder="password"
                className={error && formData.password == ''? 'border-red-500' : ''}
              />
            </div>
        </div>

        <div>
              <Label htmlFor="password">Select showroom</Label>
        <Select  value={formData.showroomId} onValueChange={(value) => setFormData({...formData, showroomId: value})}>
            <SelectTrigger className={` "w-full ${error && formData.showroomId == ''? 'border-red-500' : ''}`}>
              <SelectValue placeholder="Select a showroom" />
            </SelectTrigger>
            <SelectContent> 
                {data && data.data.map((item, i)=> {
                    return <SelectItem key={i} value={item._id}>{item.name}</SelectItem>
                })}
      
            </SelectContent>
          </Select>
        </div>
        
        <DialogFooter>
            <DialogClose asChild>
                
                <Button type="button" onClick={handleSubmit} >Add Admin</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
