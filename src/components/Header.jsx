import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch = useDispatch()
  const  user = useSelector((store) => store.user)
  const navigate = useNavigate()
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName} = user;
                dispatch(addUser({uid,email,displayName}))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
            });
          return () => unsubscribe()
    },[])
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
        src= {LOGO}
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