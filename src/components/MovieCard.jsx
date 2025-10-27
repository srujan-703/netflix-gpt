import React from 'react'
import { IMG_CDn } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] p-2'>
        <img src={IMG_CDn + posterPath} alt="Movies card" />
    </div>
  )
}

export default MovieCard