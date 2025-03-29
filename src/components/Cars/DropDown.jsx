"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const carCategories = [
  "Sedan",
  "SUV (Sport Utility Vehicle)",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Minivan",
  "Pickup Truck",
  "Crossover",
  "Sports Car",
  "Luxury Car",
  "Electric Vehicle (EV)",
  "Hybrid Vehicle",
  "Plug-in Hybrid Vehicle (PHEV)",
  "Wagon",
  "Van",
  "Off-Road Vehicle",
  "Compact Car",
  "Mid-Size Car",
  "Full-Size Car",
  "Supercar",
  "Hypercar",
  "Muscle Car",
  "Classic Car",
  "Vintage Car",
  "Limousine",
  "Microcar",
  "City Car",
  "Roadster",
  "Targa",
  "Shooting Brake",
  "Cabriolet",
  "Grand Tourer (GT)",
  "Race Car",
  "Drift Car",
  "Rally Car",
  "Commercial Vehicle",
  "Camper Van",
  "Amphibious Vehicle",
  "Autonomous Vehicle",
  "Concept Car",
];

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? carCategories.find((Categorie) => Categorie === value)
            : "Select Categorie..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Categorie..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Categorie found.</CommandEmpty>
            <CommandGroup>
              {carCategories.map((Categorie) => (
                <CommandItem
                  key={Categorie}
                  value={Categorie}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {Categorie}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === Categorie ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
