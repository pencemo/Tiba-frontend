import { authService } from '@/API/services/authService'
import { userProfile } from '@/hooks/QueryHooks/useUserService'
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export const ProfileContextData = createContext()

function ProfileContext({children}) {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const {data}=userProfile()
    useEffect(()=>{
        const getProfile = async () => {
            if(data){
                if(data.success){
                    setProfile(data.data)
                    setLoading(false)
                }else{
                    setLoading(false)
                }
            }
        }
        getProfile()
    }, [data])

  return (
    <ProfileContextData.Provider value={{profile, setProfile, loading}} >
        {children}
    </ProfileContextData.Provider>
  )
}

export default ProfileContext

export const usePorfile = () => {
    return useContext(ProfileContextData)
}