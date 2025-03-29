import React from "react";
import img from "../../assets/60607.jpg";
import { Link } from "react-router-dom";
function Section() {
  return (
    <div className="max-md:py-10 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-[85rem] min-h-screen flex mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-foreground sm:text-4xl lg:text-6xl lg:leading-tight">
              Start your journey with <span className="">Tiba</span>
            </h1>
            <p className="mt-3 text-muted-foreground">
              Tiba Rent A Car stands at the forefront of the car rental
              industry, offering tailored solutions for all your mobility needs,
              including short-term rentals and long-term leasing agreements.
              Renowned for providing the most competitive rates in Dubai, we
              prioritize delivering seamless experiences through a
              customer-first approach and adaptable partnerships with clients
              and suppliers alike. <br />
              <br />
              Catering to both individual travelers and corporate entities, Tiba
              Rent A Car is committed to aligning your unique requirements with
              the perfect vehicle, ensuring affordability without compromising
              quality. Your confidence and satisfaction are our top priorities,
              which is why we uphold the highest standards of safety and conduct
              rigorous, regular maintenance on our fleet.
              {/* <br />
              <br />
              At Tiba, we blend cutting-edge service with reliability,
              empowering you to explore Dubai—and beyond—with peace of mind. Let
              us drive your journey forward. */}
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-zinc-600 text-white hover:bg-zinc-700 focus:outline-none focus:bg-zinc-700 disabled:opacity-50 disabled:pointer-events-none"
                to={'/about'}
              >
                About Us
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 focus:outline-none focus:bg-zinc-50 disabled:opacity-50 disabled:pointer-events-none"
                to={'/contact'}
              >
                Contact Now
              </Link>
            </div>
          </div>

          <div className="relative ">
            <img className="w-full rounded-md" src={img} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
