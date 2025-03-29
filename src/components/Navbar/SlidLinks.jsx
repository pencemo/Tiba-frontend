import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu02Icon } from "hugeicons-react"
import { Link, useNavigate } from "react-router-dom"

export function SlideLink() {
  const navigate = useNavigate()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="border p-1 rounded-md hover:bg-gray-100 cursor-pointer md:hidden">
            
        <Menu02Icon />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Links</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="mt-5">
        <div className=' flex flex-col items-center gap-4 '>
                <Link to={'/'} className='line relative font-medium mx-2'>Home</Link>
                <Link to={'/cars'} className='line relative font-medium mx-2'>Cars</Link>
                <Link to={'/about'} className='line relative font-medium mx-2'>About</Link>
                <Link to={'/contact'} className='line relative font-medium mx-2'>Contact</Link>
                <Button onClick={()=>navigate('/login')}>Get started</Button>
            </div>
        </div>
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
