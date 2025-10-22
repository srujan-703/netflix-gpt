import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Header = () => {
  const  user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
        navigate("/")
        }).
        catch((error) => {
          navigate("/error")
    });
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
        className='w-40'
      />
      {user && (
      <div className='flex items-center'>
        <button className='text-white font-bold bg-red-500 px-4 py-2 rounded-xl' onClick={handleSignOut}>
          Sign out
        </button>
      </div>)
      }
    </div>
  )
}

export default Header