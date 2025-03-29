
import React,  {useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, CircleX } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function FailPopup({isVisible, onClose} ) {
//   const [isVisible, setIsVisible] = useState(show)
 const handelPage = () => {
   onClose()
 }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-sm rounded-2xl bg-white px-6 py-10 shadow-lg"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-500">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3,
                  }}
                >
                  <CircleX className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 rounded-full bg-red-400/30"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h2 className=" font-medium">Pyament failed</h2>
              {/* <p className="mt-2 text-xl font-bold text-gray-700">Your payment is successful</p> */}
              <p className="text-sm text-gray-500">Your payment has not been completed. Please try again later</p>
              <button onClick={handelPage} className="text-muted-foreground bg-gray-100 py-1 px-3 rounded-md mt-4 hover:bg-gray-200 hover:text-foreground text-sm">
                Close
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

