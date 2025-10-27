import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { usePopularMovies } from '../hooks/usePopular'
import { useTopRatedMovies } from '../hooks/useToprated'
import { useUpComingMovies } from '../hooks/useUpComing'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
  return (
    <div>
      <Header />  
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse