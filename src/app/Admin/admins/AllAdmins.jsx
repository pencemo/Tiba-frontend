import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AllShowroom from './AllShowroom'
import { Button } from '@/components/ui/button'
import { AddShowroom } from '@/components/ManageAdmin/AddShowroom'
import { AdminList } from './AdminList'

function AllAdmins() {
  return (
    <div className='max-w-[85rem] mx-auto'>
        <div className='w-full flex items-center justify-between my-5'>
            <h1  className="text-3xl font-bold tracking-tight">Showroom</h1>
            {/* <Button>Add showroom</Button> */}
            <AddShowroom/>
        </div>
        <AllShowroom/>
        <AdminList/>
    </div>
  )
}

export default AllAdmins