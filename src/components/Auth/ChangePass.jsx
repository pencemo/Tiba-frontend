import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/API/services/authService";
import { useToast } from "@/hooks/use-toast";



export function ChangePass({email, success}) {

  const {toast} = useToast()
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [reEnter, setReEnter] = useState("")
  const [error, setError] = useState("");


  const handleSubmit = async() => {
    if(password !== reEnter){
      setError("Password does not match")
      toast({
        title: "Password does not match",
        description: 'Please enter the same password',
      })
      return
    }
    if(!password || !reEnter){
      setError("Please provide a password")
      toast({
        title: "Please provide a password",
        description: 'Please enter a password',
      })
      return
    }
    try{
      const data = await authService.changePassword({email, password: reEnter})
      if(!data.success){
        setError(data.message)
        toast({
          title: "Error to chenging password",
          description: data.message+' Please try again',
        })
        return 
      }else{
        setError("")
        toast({
          title: "Password changed",
          description: 'Your password chenged successfully',
        })
        setPassword('')
        setReEnter('')
        success()
      }
      
    }catch(err){
      setError('Something went wrong')
    }
    
  }
  
  return (
    <div>
        <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input onChange={(e)=>setPassword(e.target.value)} className={(error === "Please provide a password" && !password) || (error === "User not found") ? "border-red-500" : ""} id="password" type="password" placeholder="Enter new password" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reenter">Re enter</Label>
        <Input onChange={(e)=>setReEnter(e.target.value)} className={(error === "Password does not match" && reEnter) || (error === "User not found") ? "border-red-500" : ""} id="reenter" type="password" placeholder="Re-enter new password" required />
      </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      <Button onClick={handleSubmit} type="submit" className="w-full">
        Change Password
      </Button>
    </div>
    </div>
  );
}
