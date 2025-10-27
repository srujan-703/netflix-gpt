import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black">
      <div className='-mt-52 pl-10 relative z-20'>
        <MovieList title = "Now Playing" movies = {movies?.nowPlayingMovies?.results}/>
        <MovieList title = "Popular" movies = {movies?.popularMovies?.results}/>
        <MovieList title = "Top Rated" movies = {movies?.topRatedMovies?.results}/>
        <MovieList title = "Up Coming" movies = {movies?.upComingMovies?.results}/>
      </div>
    </div>
  )
}

export default SecondaryContainer