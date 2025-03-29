import NewUserNot from '@/components/Notification/newUser'
import Loader from '@/components/ui/loader'
import { Separator } from '@/components/ui/separator'
import { useNotificationRead, useUserNotification } from '@/hooks/QueryHooks/useNotification'
import React, { useEffect } from 'react'

function UserNotification() {
    const {data, isError, isLoading}=useUserNotification()
    const {mutate}=useNotificationRead()

    useEffect(() => {
      const makeRead = () => {
          const ids = data?.data?.notification?.map((item) => item._id) || [];
  
          if (ids.length > 0) {
              mutate(ids); 
          }
      };
  
      const timer = setTimeout(() => {
          makeRead();
      }, 4000);
  
      return () => clearTimeout(timer);
  }, [data]);
  

    if(isLoading) return <div className='w-full h-full'><Loader/></div>
    if(isError) return <div>Error</div>
  return (
    <div className='max-w-[70rem] mx-auto'>
      <div className='my-5'>
        <h1 className='text-2xl font-bold text-muted-foreground'>Notifications</h1>
      </div>
      <div className='flex flex-col space-y-1'>

        {data.data.notification.map((item)=>{
          return (
            <>
              <NewUserNot data={item} key={item.id}/>
              <Separator className="" />
            </>
          )
        })}
        </div>
    </div>
  )
}


export default UserNotification
