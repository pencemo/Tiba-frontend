import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sortBy= [
    "Deffault",
    'Price',
    'Mileage',
    'Year'
]
export function SelectbySort({setSelect, value}) {
  return (
    <Select value={value} onValueChange={(value) => setSelect(value)}>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select item</SelectLabel>
          {sortBy.map((item)=>{
           return <SelectItem key={item} value={item}>{item}</SelectItem>
            
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
