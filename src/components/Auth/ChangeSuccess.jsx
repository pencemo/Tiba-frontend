
import React,  {useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function ChangeSucsess( ) {
//   const [isVisible, setIsVisible] = useState(show)
const navigate = useNavigate()
 const handelPage = () => {
   navigate('/login')
 }

  return (
    <AnimatePresence>
        <div className="">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400">
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
                  <Check className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 rounded-full bg-emerald-400/30"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-center"
            >
              <h2 className="text-sm text-muted-foreground">Password changed successful</h2>
              <button onClick={handelPage} className="text-muted-foreground bg-gray-100 py-1 px-3 rounded-md mt-2 hover:bg-gray-200 hover:text-foreground text-sm">
                Login now
              </button>
            </motion.div>
          </motion.div>
        </div>
    </AnimatePresence>
  )
}

