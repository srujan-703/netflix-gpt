import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          " /videos?language=en-US",
        OPTIONS
      );
      const data = await res.json();
      const filterData = data?.results?.filter((res) => res.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : data?.results?.[0];
      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.log("error occcured", err);
    }
  };
  useEffect(() => {
    if (!movieId) return;
    getMovieVideos(movieId);
  }, []);
};
export default useMovieTrailer;
