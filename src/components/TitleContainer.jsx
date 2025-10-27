import React from 'react'

const TitleContainer = ({original_title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-bold text-3xl '>{original_title}</h1>
      <p className='mt-5 w-1/4 '>{overview}</p>
      <div>
        <button className=' mt-6 text-black bg-white rounded-md w-24 h-9 hover:bg-opacity-50'>▶️Play</button>
        <button className='mx-2 mt-6 text-white bg-gray-600 rounded-md w-24 h-9 hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default TitleContainer