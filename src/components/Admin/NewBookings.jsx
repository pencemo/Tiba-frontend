import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAllBookings } from '@/hooks/QueryHooks/useBookings'
import { format } from 'date-fns'
import React from 'react'

function NewBooking() {
    const {data, error, isLoading}=useAllBookings(1,3)
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  return (
    <div className="col-span-1 w-full overflow-hidden">
        {data?.data?.length > 0 ? <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              List of recent bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='text-nowrap'>
                {data.data.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell>
                        <div className='flex flex-col '>
                            <span className='font-medium'>{data.name}</span>
                            <span className='text-xs text-muted-foreground'>{data.email}</span>
                        </div>
                    </TableCell>
                    <TableCell>{data.contact}</TableCell>
                    <TableCell>{format(new Date(data.createdAt), 'PP')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>:
        <Card className='text-center grid place-content-center w-full min-h-36 text-muted-foreground font-medium'>No Bookings</Card>
        }
    </div>
  )
}

export default NewBooking