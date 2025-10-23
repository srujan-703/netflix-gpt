import React from 'react'
import TitleContainer from "./TitleContainer"
import VideoContainer from "./VideoContainer"
import { useSelector } from 'react-redux'

const MainConatainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results)
  if(!movies) return null
  const x = movies[0]
  console.log(x)
  return (
    <div>
      <TitleContainer />
      <VideoContainer />
    </div>
  )
}

export default MainConatainer