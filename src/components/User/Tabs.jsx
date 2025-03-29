import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Home, Calendar, Bell, Settings, CreditCard   } from 'lucide-react';

const tabs = [
  {
    name: "Overview",
    link: '',
    icon: Home,
  },
  {
    name: "Bookings",
    link: '/user/booking',
    icon: CreditCard,
  },
  // {
  //   name: "Billings",
  //   link: '/user/billings',
  //   icon: Calendar,
  // },
  {
    name: "Notification",
    link: '/user/notification',
    icon: Bell,
  },
  {
    name: "Settings",
    link: '/user/settings',
    icon: Settings,
  },
];
export default function Frame() {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const tabRefs = useRef([])

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeIndex])

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0]
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    })
  }, [])


  return (
    <div className={`flex justify-center items-center w-full sticky top-0 bg-background z-10 `}>
      <div
        className={`w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 h-[90px] relative flex items-center border-b`}
      >
        <div className="p-0">
          <div className="relative">
            {/* Hover Highlight */}
            <div
              className="absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
              }}
            />

            {/* Active Indicator */}
            <div
              className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
              style={activeStyle}
            />

            {/* Tabs */}
            <div className="relative flex space-x-[6px] items-center">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] rounded-[6px] ${
                    index === activeIndex ? "text-[#0e0e10]  dark:text-white" : "text-[#0e0f1199] dark:text-[#ffffff99]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setActiveIndex(index)
                    navigate(tab.link)
                  }}
                >
                  <div className="text-sm gap-2 font-medium whitespace-nowrap flex items-center justify-center h-full">
                    <span><tab.icon size={18} strokeWidth={1.8} /></span>
                    <span className="hidden sm:block">

                    {tab.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

