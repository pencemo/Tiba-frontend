import React, { useState } from "react";
import { Input } from "../ui/input";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { RadioButton } from "./RadioButton";
import { ScrollArea } from "../ui/scroll-area";
import { Combobox } from "./DropDown";
const carMakes = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    // "Dodge",
    // "Ferrari",
    // "Fiat",
    // "Ford",
    // "Genesis",
    // "GMC",
    // "Honda",
    // "Hyundai",
    // "Infiniti",
    // "Jaguar",
    // "Jeep",
    // "Kia",
    // "Lamborghini",
    // "Land Rover",
    // "Lexus",
    // "Lincoln",
    // "Lotus",
    // "Maserati",
    // "Mazda",
    // "McLaren",
    // "Mercedes-Benz",
    // "Mini",
    // "Mitsubishi",
    // "Nissan",
    // "Pagani",
    // "Peugeot",
    // "Porsche",
    // "Ram",
    // "Renault",
    // "Rolls-Royce",
    // "Saab",
    // "Subaru",
    // "Suzuki",
    // "Tesla",
    // "Toyota",
    // "Volkswagen",
    // "Volvo",
  ];
function CarsFilte() {
    const [isBrandOpen, setIsBrandOpen] = useState(true);
  return (
    <div className="w-80 min-h-full bg-gray-50 py-2 px-4 rounded-xl border">
      <h1 className="text-lg font-semibold text-zinc-900 my-5">Filter by</h1>
      <Input
        onChange={(e) => console.log(e.target.value)}
        type="text foucus:outline-none"
        placeholder="Search"
        className="mt-3"
      />
      <div className={`mt-3 ${isBrandOpen ? 'h-72': 'h-10'} p-1 transition-all duration-300 border bg-white rounded-lg pb-10 overflow-hidden`}>
        <div onClick={()=>setIsBrandOpen(!isBrandOpen)} className="flex justify-between items-center  cursor-pointer p-2">
          <h1 className="text-sm text-zinc-800 ">Brand</h1>
          <HiOutlineChevronDown />
        </div>
        <ScrollArea className="h-56">
        <div className="mt-3 ml-2 flex flex-col gap-3 ">
      
            {carMakes.map((make, index)=>{
                return (
                    
                    <div className="flex items-center space-x-2">
            <Checkbox id={index} />
            <Label htmlFor={index}>{make}</Label>
          </div>
                )
            })}
          
        </div>
            </ScrollArea>
      </div>

      <div className="mt-3 ">
        <div className="">
          <h1 className="text-sm text-zinc-600 p-1">Catogery</h1>
        </div>
           <Combobox/>
        
      </div>

      <div className="mt-3 p-2">
        <div className="flex justify-between items-center cursor-pointer">
          <h1 className="text-sm text-zinc-600 ">Fuel Type</h1>
          <HiOutlineChevronDown />
        </div>
        <div className="mt-3 ml-1 flex flex-col gap-3">
           <RadioButton/>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default CarsFilte;
