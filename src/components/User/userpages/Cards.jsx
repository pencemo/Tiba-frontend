import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { Calendar03Icon, MoneySecurityIcon } from 'hugeicons-react'
import React from 'react'

function Cards({totalBookings, totalBookingAmout}) {
  return (
    <div className='space-y-4'>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Bookings
          </CardTitle>
          <Calendar03Icon size={20} className='text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBookings}</div>
          <p className="text-xs text-muted-foreground">
            Your total bookings of all months
          </p>
        </CardContent>
      </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Booking Amount
          </CardTitle>
          <MoneySecurityIcon size={20} className='text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBookingAmout} <span>AED</span></div>
          <p className="text-xs text-muted-foreground">
            {format(new Date(), 'PPP')}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cards