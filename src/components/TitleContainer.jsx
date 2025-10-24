import React from 'react'

const TitleContainer = ({original_title,overview}) => {
  return (
    <div className='pt-48 px-14'>
      <h1 className='text-bold text-3xl'>{original_title}</h1>
      <p className='mt-5 w-3/4'>{overview}</p>
      <div>
        <button className=' mt-6 text-white bg-gray-600 rounded-md w-24 h-9'>▶️Play</button>
        <button className='mx-2 mt-6 text-white bg-gray-600 rounded-md w-24 h-9'>More Info</button>
      </div>
    </div>
  )
}

export default TitleContainer