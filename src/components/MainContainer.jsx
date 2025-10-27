import React from 'react'
import TitleContainer from "./TitleContainer"
import VideoContainer from "./VideoContainer"
import { useSelector } from 'react-redux'

const MainConatainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results)
  if(!movies) return null
  const mainMovie = movies[0]
  const {original_title, overview,id} = mainMovie
  return (
    <div>
      <TitleContainer original_title = {original_title} overview = {overview}/>
      <VideoContainer movieId = {id} />
    </div>
  )
}

export default MainConatainer