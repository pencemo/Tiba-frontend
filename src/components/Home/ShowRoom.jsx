import { useAllShowroom } from "@/hooks/QueryHooks/useShowroom";
import {
  Call02Icon,
  Location03Icon,
  MailOpen01Icon,
  TelephoneIcon,
} from "hugeicons-react";
import React from "react";
import { Separator } from "../ui/separator";
import Loader from "../ui/loader";
const rentACarContacts = [
  {
    name: "Jabal Arafat Rent A Car",
    address: {
      road: "Omar ibn al Khattab Road, ",
      building: "Zeenath Building, ",
      shop: "Shop No 2, ",
      area: "Al Baraha, Deira, Dubai",
      postBox: "Post Box 191135",
    },
    email: "ismailcc@yahoo.com",
    tel: "042396629",
  },
  {
    name: "TIBA Rent A Car",
    address: {
      road: "Omar bin al Khattab Road, ",
      area: "Al Muteena, Deira",
      building: "Blue Building, ",
      shop: "Shop No. 3, ",
      postBox: "P.O. Box 39731",
    },
    email: "tibarentacar@gmail.com",
    tel: "042733003",
    mobile: ["0529292492"],
  },
  {
    name: "Al Siam Rent A Car",
    address: {
      building: "Abdullah Building 99A, ",
      shop: "Shop No 4, ",
      street: "Estiqlal Street, ",
      area: "Yarmook, Sharjah",
      postBox: "Post Box 63919",
    },
    tel: "06 5670118",
    mobile: ["055 2841880", "055 2841922"],
  },
  {
    name: "Al Qudrha Rent A Cars",
    address: {
      street: "Khaled bin Rafeh St, ",
      area: "Al Yarmook (St 3), Sharjah",
      building: "Building No. 30, ",
      shop: "Shop No. 1",
    },
  },
];
function ShowRoom() {
  const { data, error, isLoading } = useAllShowroom();
  if (isLoading) return <div className="w-full h-32"><Loader/></div>;
  if (error) return <div></div>;

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Showroom
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Details of our showrooms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data.map((item, i) => {
            return (
              <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                {/* <div class="h-52 w-full overflow-hidden flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250966.36294650938!2d76.6017536!3d10.629939199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742283422722!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
      </div> */}
                <div class="p-4 md:p-6">
                  <span class="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                    Showroom
                  </span>
                  <h3 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm capitalize text-gray-500 dark:text-neutral-500">
                    {item.city || ""} {item.state || ""} {item.country || ""}
                  </p>
                  <p class="mt-3 text-gray-600 dark:text-neutral-500">
                    {`${item.address || ""}`}
                  </p>
                  <Separator className="my-5" />
                  <div className="mt-3 space-y-2">
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                      {item.telphone && (
                        <div className="flex items-center gap-x-2">
                          <span className="size-6 bg-foreground text-background rounded-full p-1 grid place-content-center">

                          <TelephoneIcon size={15} />
                          </span>
                          {item.telphone}
                        </div>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                      {item.contactNo && (
                        <div className="flex items-center gap-x-2">
                          <span className="size-6 bg-foreground text-background rounded-full p-1 grid place-content-center">

                          <Call02Icon size={15} />
                          </span>
                          {item.contactNo}
                        </div>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-500">
                      {item.email && (
                        <div className="flex items-center gap-x-2">
                          <span className="size-6 bg-foreground text-background rounded-full p-1 grid place-content-center">

                          <MailOpen01Icon size={15} />
                          </span>
                          {item.email}
                        </div>
                      )}
                    </p>
                  </div>
                </div>
                <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                  <a
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href={item.locationLink}
                  >
                    View location
                  </a>
                  <button class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    Contact Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
