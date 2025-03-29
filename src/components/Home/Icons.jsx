import { Car03Icon, CustomerSupportIcon, Settings02Icon, Timer02Icon } from 'hugeicons-react';
import React from 'react'
const content = [
  {
    title: 'Competitive Pricing',
    description: 'Stretch your budget further with deals tailored to your needs.',
    icon: <Car03Icon/>
  },
  {
    title: 'Well-Maintained Fleet',
    description: 'Every vehicle is serviced, sanitized, and safety-inspected.',
    icon: <Settings02Icon/>
  },
  {
    title: '24/7 Support',
    description: 'Assistance whenever you need it, wherever you are.',
    icon: <CustomerSupportIcon/>
  },
  {
    title: 'Flexible Rentals',
    description: 'Hourly, daily, weekly, or monthly—your schedule, your rules.',
    icon: <Timer02Icon/>
  }
];

function Icons() {
  return (
    <div className='mb-5'>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">

{content.map((item, index) =>{
  return (
    <div key={index} className="text-center">
      <div className="flex justify-center items-center size-12 dark:bg-zinc-900 dark:border-zinc-600 bg-gray-50 border border-gray-200 rounded-full mx-auto">
        {item.icon}
        {/* <svg className="shrink-0 size-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg> */}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold dark:text-zinc-200 text-zinc-800">{item.title}</h3>
        <p className="mt-1 text-muted-foreground">{item.description}</p>
      </div>
    </div>

  )
})}
    
  </div>
</div>
    </div>
  )
}

export default Icons