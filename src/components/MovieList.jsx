import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
  return (
    <div>
        <h1 className='text-3xl m-1 pt-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll p-3 scrollbar-hidden'>
          <div className="flex flex-row justify-center">
            {movies?.map((mov) => (
              <MovieCard key={mov.id} posterPath={mov.poster_path} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default MovieList