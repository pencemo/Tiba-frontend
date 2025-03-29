import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePorfile } from '@/Context/ProfileContext';
import Loader from '@/components/ui/loader';

function Protect({ children, requiredRole }) {
  const {profile, setProfile, loading} = usePorfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // Redirect if profile is not logged in or does not have the required role
      if (!profile || !requiredRole.includes(profile.role)) {
        navigate('/login'); // Change '/login' to your login route
      }
    }
  }, [loading, profile, requiredRole, navigate]);

  if (loading) {
    return (
      <div className='w-full h-screen'>
        <Loader/>
      </div>
    );
  }

  if (profile) {
    if(!profile.isVerified){
      return (
        <div className='w-full h-screen grid place-content-center'>
          <span className="text-lg text-foreground">Account not verified</span>
        </div>
      );
    }else if(!profile.isActive){
      return (
        <div className='w-full h-screen grid place-content-center'>
          <span className="text-lg text-foreground">Account not activated</span>
        </div>
      );

    }else{
      requiredRole.includes(profile.role) ? children : null;
    }
  }

  // If profile is authenticated and has the required role, render the children
  return profile && requiredRole.includes(profile.role) ? children : null;
}

export default Protect;
