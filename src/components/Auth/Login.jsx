import React from 'react'
import { LoginForm } from './login-form'
import carImg from '../../assets/60607.jpg'
import { useLogo } from '@/Utils/LogoEx'
import { Link } from 'react-router-dom'

function Login() {
  const logo = useLogo()
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 ">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to={'/'} className="flex items-center gap-2 font-medium">
            <div className="flex w-16 items-center justify-center rounded-md ">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={carImg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default Login
