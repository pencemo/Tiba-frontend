
import { useState } from "react"
// import { useForm } from "react-hook-form"
// import Image from "next/image"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useNavigate } from "react-router-dom"
import carImg from '../../assets/60607.jpg'
import { Label } from "../ui/label"
import { useLogo } from "@/Utils/LogoEx"
import { authService } from "@/API/services/authService"
import { usePorfile } from "@/Context/ProfileContext"
import { Loader2 } from "lucide-react"

export default function SignUpForm() {
  const logo = useLogo()
  const {setProfile}=usePorfile()
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError]=useState('')
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const newUser = await authService.createUser(formData)
      if(newUser.success){
        setProfile(newUser.data)
        navigate('/user')
      }else{
        setError(newUser.message)
      }
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="grid min-h-svh lg:grid-cols-2 w-full ">
      <div className=" flex flex-col w-full sm:px-8 px-4lg:px-12">
      <div className="flex justify-center gap-2 pt-8  md:justify-start">
          <Link to={'/'} className="flex items-center gap-2 font-medium">
            <div className="flex w-16 items-center justify-center rounded-md ">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="w-full h-full flex  items-center ">
        
        <div className="flex-1">
          <div className="mx-auto max-w-sm px-4 md:px-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
              <p className="text-sm text-muted-foreground">Let's get started with us </p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor='name'>Name</Label>
                <Input id='name' type="text" name='name' onChange={handleInputChange} placeholder="Enter your name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type="email" name='email' onChange={handleInputChange} placeholder="Enter your email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor='password'>Password</Label>
                <Input id="password" type="password" name='password' onChange={handleInputChange} placeholder="Enter your password" />
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox checked={isChecked} onCheckedChange={(value)=>setIsChecked(value)} id="terms" />
                <label htmlFor="terms" className="text-sm leading-none text-muted-foreground">
                  I agree to all Term, Privacy Policy
                </label>
              </div>
              <div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
              <Button disabled={!isChecked} className="w-full" type="submit" >
                {isLoading? <Loader2 className="animate-spin"/> :"Sign Up"}
              </Button>
            </form>


            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-0">
          <img
            src={carImg}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold">Discovering the Best Cars for Your Drive </h2>
            <p className="mb-6 max-w-md text-sm text-muted-foreground">
              Our expertise is Designing Complete Environments: exceptional buildings, communities and places in special
              situations
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">100% Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8l-8 8-4-4" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Free delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

