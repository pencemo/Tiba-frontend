import React from 'react'
import { HiArrowSmallRight} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import CarBox from '../Cars/CarBox';
import { useAllCarsUser } from '@/hooks/QueryHooks/useCars';
import Loader from '../ui/loader';


function FindCars() {
 
  const {data, isLoading, error}=useAllCarsUser(1, 4)
  if(isLoading) return <div className='w-full h-32'><Loader/></div>
  // return <div className='w-full h-32'><Loader/></div>
  if(error) return <div>Error</div>
  return (
    <div className='w-full py-20  bg-g ray-100'>
        <h1 className='text-center text-4xl font-bold mb-2'>Find Your Perfect Vehicle</h1>
        <div className='max-w-[85rem] mx-auto flex items-center justify-between'>
          <div></div>
            <div className=''>
                <Link to={'/cars'} className='flex items-center gap-1 font-medium group hover:text-zinc-900 text-zinc-600'>Explore Full Fleet 
                    <div className='group-hover:translate-x-1 transition-all duration-300'>
                    <HiArrowSmallRight size={20}/>
                    </div>
                </Link>
            </div>
        </div>
        <div className='max-w-[85rem] mx-auto mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-3'>
        {data?.data && data.data.map((car, index) => <CarBox car={car} key={index} />)}
        </div>
    </div>
  )
}

export default FindCars