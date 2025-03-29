import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Car04Icon } from 'hugeicons-react'

function ShowroomCard({showroom}) {
  return (
    <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {showroom.country}, 
              {showroom.city}
             
            </CardTitle>
            <Car04Icon/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{showroom.name}</div>
            <p className="text-xs text-muted-foreground">
              {showroom.address}
            </p>
          </CardContent>
        </Card>
  )
}

export default ShowroomCard