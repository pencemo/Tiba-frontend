import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { formatDistanceToNow } from 'date-fns'
import { Calendar01Icon, Message01Icon, Notification03Icon, UserIcon } from 'hugeicons-react'

function NewUserNot({data}) {

  return (
    <div className={`flex md:items-center gap-2 py-3 md:py-5 md:px-4 px-2 `}>
        <div className='relative'>
        {data.type === 'newUser'? <div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center'>
            <UserIcon className='text-red-600' size={20}/>
        </div>
        : data.type === 'newBooking'? <div className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center'>
            <Calendar01Icon className='text-blue-600' size={20}/>
        </div>
        : data.type === 'newEnquiry'? <div className='w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center'>
            <Message01Icon className='text-violet-600' size={20}/>
        </div>
        : <div className='w-10 h-10 rounded-full bg-green-50 flex items-center justify-center'>
            <Notification03Icon className='text-green-600' size={20}/>
        </div>
        }
        {!data.isRead &&<div className='absolute -top-0.5 left-0.5 w-2 h-2 animate-p ulse rounded-full bg-blue-600'></div>}
        </div>
        <div className='flex max-md:flex-col md:items-end md:justify-between w-full'>
            <div>
                <h1 className='font-medium text-foreground'>{data.title}</h1>
                <p className='text-sm text-muted-foreground'>{data.message}</p>
            </div>
            <div className='mt-1'>
                <h1 className='text-xs text-muted-foreground'>{formatDistanceToNow(data.createdAt, { addSuffix: true })}</h1>
            </div>
        </div>
    </div>
  )
}

export default NewUserNot