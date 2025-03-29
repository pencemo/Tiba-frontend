import React from 'react'
import jeepImg from '../../assets/JeepImg.png'
import { CheckIcon } from 'lucide-react'
import { CheckmarkCircle01Icon } from 'hugeicons-react'
import { Link } from 'react-router-dom'

function Fetcher() {
    const fetchers = [
  "Unmatched Reliability",
  "A Fleet for Every Need",
  "Affordable Excellence",
  "Customer-Centric Service",
  "Clean & Safe Vehicles",
  "Added Convenience",
  "Sustainability Commitment"
    ]
  return (
    <div className='w-full min-h-screen flex items-center py-28'>
        <div className='max-w-[85rem] mx-auto p-3'>
            <div className='w-full grid md:grid-cols-2 items-center bg-gray-100 dark:bg-zinc-800 border rounded-3xl'>
                <div className='w-full p-8 md:p-14'>
                    <h1 className='text-4xl font-medium text-gray-800 dark:text-white'>Reliable Car Rentals for Your Pleasure</h1>
                    <div className='grid md:grid-cols-2 gap-3 mt-8'>
                        <div className='flex flex-col gap-1'>
                            {fetchers.slice(0,4).map((item, i)=>{
                                return <div key={i} className='flex text-muted-foreground  gap-2 items-center' ><CheckIcon strokeWidth={2.5} className='text-muted-foreground/80' size={16}/> {item}</div>
                            })}
                           
                        </div>
                        <div className='flex flex-col gap-1'>
                            {fetchers.slice(4, 10).map((item, i)=>{
                                return <div key={i} className='flex text-muted-foreground  gap-2 items-center' ><CheckIcon strokeWidth={2.5} className='text-muted-foreground/80' size={16}/> {item}</div>
                            })}
                           
                        </div>
                    </div>
                    <div className='mt-8 '>
                        <p className='text-foreground/80 text-sm'>At Tiba Rent a Car, we don’t just rent cars—we deliver peace of mind, comfort, and unforgettable experiences. Here’s why thousands of travelers and businesses trust us for their journeys:</p>
                        <Link to='/cars' className='py-2 px-6 inline-block font-medium hover:tracking-widest transition-all bg-foreground text-background rounded-full mt-4'>Get a car</Link>
                    </div>
                </div>
                <div>
                    
                <img className='w-full max-w-3xl relative bottom-10 md:bottom-20 ' src={jeepImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fetcher