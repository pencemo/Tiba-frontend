import ShowroomCard from '@/components/ManageAdmin/ShowroomCard'
import Loader from '@/components/ui/loader'
import { useAllShowroom } from '@/hooks/QueryHooks/useShowroom'
import React from 'react'

function AllShowroom() {
    const {data, error, isLoading}=useAllShowroom()
    if (isLoading) return <div className='w-full h-full'><Loader/></div>
    if (error) return <div>Error: {error.message}</div>
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.data.map((item, index) =>{
            return (
                <ShowroomCard key={index} showroom={item}/>
            )
        })}
    </div>
  )
}

export default AllShowroom