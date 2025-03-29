import React, { useEffect, useState } from 'react'

function ResendCode({resendOtp}) {
    const [timer, setTimer] = useState(60)
    useEffect(() => {
        if (timer > 0) {
            const timeout = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [timer])

    const sendOTP = () => {
      resendOtp()
      setTimer(120)
    }
  return (
    <div className={`text-center mt-2 text-sm ${timer != 0 && 'text-muted-foreground'}`}>
        Don't receive the code? 
      {timer != 0 && ` Resend after ${timer}s`}
      {timer == 0 && <button  onClick={sendOTP} className='hover:underline ml-1 disabled:opacity-40'>Resend OTP </button>}
    </div>
  )
}

export default ResendCode
