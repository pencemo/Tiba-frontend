import React from "react";
import bg from "../../assets/pngBG.png";
import { useNavigate } from "react-router-dom";

function ManiSection() {
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full inset-0 bg-[linear-gradient(to_right,#e7e7e7,_1px,transparent_1px),linear-gradient(to_bottom,#e7e7e7,_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a,_1px,transparent_1px),linear-gradient(to_bottom,#27272a,_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950"></div>
      <div className="max-w-[85rem] mx-auto px-5 h-screen grid md:grid-cols-2 gap-2 place-content-center relative">
        <section className="h-full flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start bg-zinc- 800">
            <h1 className="text-2xl md:text-6xl font-bold">
              Your Journey Starts Here Drive the Extra Mile with Tiba.
            </h1>
            <p className="max-w-4xl mt-3 md:mt-5 md:text-base text-sm">
              Whether you're exploring the city, embarking on a road trip, or
              need a reliable vehicle for business, Tiba Rent a Car offers the
              perfect ride. With a diverse fleet, unbeatable rates, we're here to make every mile memorable.
            </p>
            {/* <button className='bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white px-5 py-3 mt-5 rounded-full'>Reserve Your Ride</button> */}
            <button onClick={()=>navigate('/cars')} className="button mt-3 md:mt-5">
              <span className="button-content">Reserve Your Ride </span>
            </button>
          </div>
        </section>
        <section className=" h-full w-full">
          <img className="w-full" src={bg} alt="" />
        </section>
      </div>
    </div>
  );
}

export default ManiSection;
