import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { usePopularMovies } from '../hooks/usePopular'
import { useTopRatedMovies } from '../hooks/useToprated'
import { useUpComingMovies } from '../hooks/useUpComing'
import { useSelector } from 'react-redux'
import GptSearch from "./GptSearch"
const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGpt)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  return (
    <div>
      <Header /> 
      {
        showGpt ? <GptSearch /> :
        <> 
        <MainContainer />
        <SecondaryContainer />
        </>
      }
       
      
    </div>
  )
}

export default Browse