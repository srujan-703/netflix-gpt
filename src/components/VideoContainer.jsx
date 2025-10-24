import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const VideoContainer = ({movieId}) => {
  const dispatch = useDispatch()
  const trailervideo = useSelector((store) => store.movies.trailerId)
  const getMovieVideos = async () => {
    try{
      const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US` ,OPTIONS)
      const data = await res.json()
      const filterData = data?.results.filter((res) => res.type === "Trailer")
      const trailer = filterData.length ? filterData[0] : data?.results?.[0]
      dispatch(addTrailerVideo(trailer))
    }
    catch(err)
    {
      console.log("error occcured",err)
    }
  }
  useEffect(() => {
    getMovieVideos()
  },[])
  return (
    <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailervideo?.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  )
}

export default VideoContainer