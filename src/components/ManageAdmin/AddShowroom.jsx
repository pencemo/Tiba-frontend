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
import { useShowroomMutation } from "@/hooks/QueryHooks/useShowroom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

export function AddShowroom() {
    const [error, serError]=useState(false)
    const {mutate, isError, isSuccess}=useShowroomMutation()
    const {toast}=useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    contactNo: "",
    telphone: "",
    city: "",
    state: "",
    country: "",
    address: "",
    locationLink: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCancel = () => {
    // Reset form data
    setFormData({
      name: '',
      email: "",
      contactNo: "",
      telphone: "",
      city: "",
      state: "",
      country: "",
      address: "",
      locationLink: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    serError(false)
    if(formData.name == '' ||  formData.contactNo == '' || formData.city == '' || formData.state == '' || formData.country == '' || formData.address == ''){
        return serError(true)
    }
    
    try{
      mutate(formData)
      handleCancel( )
      if(isSuccess){
        toast({
          title: "Showroom added",
          description: "Showroom added successfully",
          variant: "success",
        })
      }
      if(isError){
        toast({
          title: "Error",
          description: "Error adding showroom",
          variant: "error",
      })
    }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add showroom</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add showroom</DialogTitle>
          <DialogDescription>
            Add showroom details and submit the form.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
                placeholder="Name of showroom"
                className={error && formData.name == ''? 'border-red-500' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Email"
              />
            </div>
          </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactNo">Contact No</Label>
              <Input
                id="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                name="contactNo"
                placeholder="Contact No"
                className={error && formData.contactNo == ''? 'border-red-500' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telphone">Telephone</Label>
              <Input
                id="telphone"
                value={formData.telphone}
                onChange={handleInputChange}
                name="telphone"
                placeholder="Telephone"
              />
            </div>
          </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                name="city"
                placeholder="City"
                className={error && formData.city == ''? 'border-red-500' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={handleInputChange}
                name="state"
                placeholder="State"
                className={error && formData.state == ''? 'border-red-500' : ''}
              />
            </div>
          </div>

        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                name="country"
                placeholder="Country"
                className={error && formData.country == ''? 'border-red-500' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="locationLink">Location Link</Label>
              <Input
                id="locationLink"
                value={formData.locationLink}
                onChange={handleInputChange}
                name="locationLink"
                placeholder="Google map link"
              />
            </div>
          </div>

        <div className="grid md:grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                name="address"
                placeholder="Address"
                className={error && formData.address == ''? 'border-red-500' : ''}
              />
            </div>
          </div>
        <DialogFooter>
            <DialogClose asChild>
                
                <Button type="button" onClick={handleSubmit} >Add showroom</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
