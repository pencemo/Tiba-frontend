import React, { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../ui/input-otp'
import { Button } from '../ui/button'
import { authService } from '@/API/services/authService'
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import ResendCode from './resendCode'

function OTP({next, email, resendOtp}) {
  const {toast} = useToast()
  const [otp, setOtp]=useState(null)
  const [error, setError]=useState('')
  const [isLoading, setLoading]= useState(false)

  const handleSubmit = async(e) => {
    setLoading(true)
    try{
      const data = await authService.verifyOTP({email, otp})
      if(!data.success){
        setError(data.message)
        toast({
          title: "OTP Error",
          description: data.message+' Please try again',
        })
        return 
      }else{
        setError("")
        toast({
          title: "OTP verified",
          description: 'Your OTP verified successfully',
        })
        next()
      }
      
    }catch(err){
      setError('Something went wrong')
    }finally{
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <div className=" ">
          {/* <Label htmlFor="email">Enter your otp</Label> */}
            <InputOTP containerClassName='mt-3 font-medium' maxLength={6} onChange={(value) => setOtp(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

          {error && <p className="text-sm mt-2 text-red-600">{error}</p>}
        </div>
      <ResendCode resendOtp={resendOtp} />
        <Button onClick={handleSubmit} className="w-full max-w-72">
          {isLoading? <Loader2 className="animate-spin" />:'Submit OTP'}
        </Button>
      </div>
    </div>
  )
}

export default OTP