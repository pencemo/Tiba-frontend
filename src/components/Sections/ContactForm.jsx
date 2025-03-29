import React from 'react'
import { Link } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Call02Icon, Location01Icon, MailOpen01Icon } from 'hugeicons-react'
import { useSendMessage } from '@/hooks/QueryHooks/useMessage'
import { Loader2 } from 'lucide-react'

function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        contact: ''
    });
    const {mutate, isPending, isSuccess, data}=useSendMessage()

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData)
        if (isSuccess) {
          setFormData({
              name: '',
              email: '',
              message: '',
              contact: ''
          })
        }
    };

  return (
    <div className='w-full min-h-screen max-md:mt-20'>
        <div className="max-md:py-10 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-[85rem] min-h-screen flex mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className='w-full'>
            <h1 className="block text-2xl font-bold text-foreground sm:text-4xl  lg:leading-tight">
              Connect with us
            </h1>
            <p className='text-sm text-muted-foreground max-w-lg mt-2'>Whether you're exploring the city, embarking on a road trip, or need a reliable vehicle for business, Tiba Rent a Car offers the perfect ride. With a diverse fleet, unbeatable rates, we're here to make every mile memorable.</p>
            <div className='grid sm:grid-cols-2 gap-x-4 gap-y-6 mt-6'>
                <div className='sm:col-span-2'>
                <div className='flex items-center space-x-3'>
                <span className='text-background bg-foreground p-1 rounded'><Location01Icon size={18}/></span>
                <p className=' text-zinc-700 dark:text-zinc-100'>Deira Al Muteena Dubai Khattab Road, Blue Building, Shop No. 3</p>
              </div>
                </div>
              <div className='flex items-center space-x-3'>
                <span className='text-background bg-foreground p-1 rounded'><MailOpen01Icon size={18}/></span>
                <p className='font-medium text-zinc-700 dark:text-zinc-100'>tibarentacar@gmail.com</p>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='text-background bg-foreground p-1 rounded'><Call02Icon size={18}/></span>
                <p className='font-medium text-zinc-700 dark:text-zinc-100'>+964 85669820</p>
              </div>
              {/* <div className='flex items-center space-x-3'>
                <span className='text-background bg-foreground p-1 rounded'><MailOpen01Icon size={18}/></span>
                <p className='font-medium text-zinc-700 dark:text-zinc-100'>tibarentacar@gmail.com</p>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='text-background bg-foreground p-1 rounded'><MailOpen01Icon size={18}/></span>
                <p className='font-medium text-zinc-700 dark:text-zinc-100'>tibarentacar@gmail.com</p>
              </div> */}
            </div>

            
          </div>

          <div className="w-full space-y-3">
            <h1 className='text-2xl font-medium text-zinc-700 dark:text-zinc-100'>Get in touch with us </h1>
            {['name', 'email', 'contact'].map((item, index) =>{

           return <div className='space-y-1' key={index}>
            <Label htmlFor={item} className='capitalize' >{item}</Label>
            <Input id={item} name={item} onChange={(e)=>onChange(e)} value={formData[item]} className='w-full dark:bg-zinc-700' type='text' />
           </div>
            })}
           <div className='space-y-1' >
            <Label htmlFor='message' >Message</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={(e)=>onChange(e)} className='w-full dark:bg-zinc-700' type='text' />
           </div>
           {isSuccess&&<p className={`text-sm ${data.success ? 'text-green-500': 'text-red-500'}`}>{data.message}</p>}
           <Button className='w-full' onClick={handleSubmit}>
                {isPending?<Loader2 className="animate-spin" />: 'Send a enquiry'}
           </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactForm