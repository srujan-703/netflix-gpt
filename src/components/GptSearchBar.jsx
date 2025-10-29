import React from 'react'
import { BG } from '../utils/constants'
const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <div className="absolute -z-10">
            <img
            src={BG}
            alt="Bakcground Image"
            />
        </div>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
            <input type="text" placeholder='What would you like to watch today'className='p-4 m-4 col-span-9 rounded-lg'/>
            <button className='bg-red-600 text-white rounded-lg m-4 p-4 col-span-3'>Submit</button>
        </form>
    </div>
  )
}

export default GptSearchBar