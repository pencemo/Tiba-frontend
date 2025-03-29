import { CheckIcon } from 'lucide-react'
import React from 'react'
const img1 = 'https://img.freepik.com/free-photo/salesman-woman-looking-car-car-showroom_1303-13581.jpg'
const img2 = 'https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg'
const img3 = 'https://img.freepik.com/free-photo/vintage-sedan-car-driving-highway-side-view_114579-5067.jpg'

function About() {
  return (
    <div>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <div className="lg:col-span-7">
      <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div className="col-span-4">
          <img className="rounded-xl" src={img1} alt="Features Image"/>
        </div>

        <div className="col-span-3 w-full h-60">
          <img className="rounded-xl w-full h-full object-cover" src={img2} alt="Features Image"/>
        </div>

        <div className="col-span-5 h-96 w-full">
          <img className="rounded-xl w-full h-full object-cover" src={img3} alt="Features Image"/>
        </div>
      </div>
    </div>

    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-foreground">
          Luxury Redefined, Mile After Mile
          </h2>
          <p className="text-muted-foreground">
          At Tiba Rent a Car, we don’t just rent cars—we deliver peace of mind, comfort, and unforgettable experiences. Here’s why thousands of travelers and businesses trust us for their journeys:
          </p>
        </div>

        <ul className="space-y-2 sm:space-y-4">
          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-zinc-50 text-zinc-600">
            <CheckIcon size={14}/>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-muted-foreground">
                 Unmatched Reliability
              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-zinc-50 text-zinc-600">
            <CheckIcon size={14}/>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-muted-foreground">
              A Fleet for Every Need
              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-zinc-50 text-zinc-600">
              <CheckIcon size={14}/>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-muted-foreground">
              Affordable <span className="font-bold">Excellence</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
