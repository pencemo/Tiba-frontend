import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useDashbordData } from '@/hooks/QueryHooks/useAdmin'
import { format } from 'date-fns'
import { Bookmark02Icon, Calendar03Icon, DollarCircleIcon, Loading03Icon } from 'hugeicons-react'
import React from 'react'

function AdminCard() {
  const {data, error, isLoading}=useDashbordData()
    
  if(error) return <div>Error</div>
  if(isLoading) return <div>Loading...</div>
  return (
    <div className='grid md:grid-cols-4 gap-4 py-3 mb-5'>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Bookings
          </CardTitle>
          <Bookmark02Icon size={20} className='text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.data.totalBooking || 0}</div>
          <p className="text-xs text-muted-foreground">
            Total bookings from all users
          </p>
        </CardContent>
      </Card>

      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            This month Bookings
          </CardTitle>
          <Calendar03Icon size={20} className='text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.data.thisMonthBooking || 0}</div>
          <p className="text-xs text-muted-foreground">
            Bookings of the {format(new Date(), 'MMMM yyyy')}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pendign Bookings
          </CardTitle>
          <Loading03Icon size={20} className='text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.data.pendign || 0}</div>
          <p className="text-xs text-muted-foreground">
            Pending status of bookings 
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Incomes
          </CardTitle>
          <DollarCircleIcon size={20} className='text-muted-foreground'/>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.data.totalAmount.$numberDecimal || 0}</div>
          <p className="text-xs text-muted-foreground">
            Total amount of bookings 
          </p>
        </CardContent>
      </Card>
      
     
    </div>
  )
}

export default AdminCard
