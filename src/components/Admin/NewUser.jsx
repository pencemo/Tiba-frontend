import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useUserList } from '@/hooks/QueryHooks/useUserList'
import { format } from 'date-fns'
import React from 'react'

function NewUser() {
    const {data, error, isLoading}=useUserList(1,4)
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  return (
    <div className="col-span-1 w-full overflow-hidden">
        {data?.data?.length > 0 ? <Card>
          <CardHeader>
            <CardTitle>New Users</CardTitle>
            <CardDescription>
              List of new user registered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='text-nowrap'>
                {data.data.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{format(new Date(data.createdAt), 'PP')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>:
        <Card className='text-center grid place-content-center w-full min-h-36 text-muted-foreground font-medium'>No Users</Card>
        }
    </div>
  )
}

export default NewUser