import { setImg } from "@/Utils/CarImg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Fuel01Icon, SeatSelectorIcon } from "hugeicons-react";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
const url = import.meta.env.VITE_API_BASE_URL;
function CarBox({ car }) {
  const navigate = useNavigate();
  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };
  return (
    <div
      className={`w-full group relative border  bg-white dark:bg-zinc-900 text-foreground p-5 rounded-xl hover:shadow-xl transition-all `}
    >
      <Carousel
        className="w-full relative"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {car.images.length > 0 &&
            car.images.map((img, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="w-full h-40  overflow-hidden rounded-lg"
                >
                  <img
                    src={`${url}${img}`}
                    alt=""
                    className="w-full h-40 border object-cover rounded-lg"
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 size-5" />
        <CarouselNext className="absolute right-1 size-5" />
      </Carousel>

      {car.category && (
        <h1 className="absolute font-medium top-6 right-7 py1 px-3 bg-background/60 text-sm border rounded-full ">
          {car.category}
        </h1>
      )}
      <div className="mt-3">
        <h1 className="text-xl font-semibold">
          {car.make} {car.model}
        </h1>
        <p className="text-sm text-muted-foreground">
          {car.year} - {car.color}
        </p>
        <p className="text-sm capitalize text-muted-foreground">
          Mileage: {car.mileage} - {car.transmission}
        </p>
        <p className=" text-foreground/80 flex items-center gap-2 capitalize mt-3">
          <Fuel01Icon size={16} /> {car.fuel_type} -{" "}
          <SeatSelectorIcon size={16} /> {car.seats}
        </p>
        <div className="flex justify-between mt-3">
          <div>
            <p className="text-2xl font-bold text-foreground">
              {car.daily_rate.$numberDecimal} AED 
            </p>
            <p className="text-sm text-muted-foreground">Per day</p>
          </div>
          {/* <div>
            <HiOutlineHeart size={25} strokeWidth={1} />
          </div> */}
        </div>
        
        <Button
          disabled={car.available === false}
          onClick={() => handleBooking(car._id)}
          className="mt-5  rounded-3xl w-full  font-medium"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default CarBox;
