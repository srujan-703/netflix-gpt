import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
export const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/now_playing?page=1`,
      OPTIONS
    );
    const data = await res.json();
    dispatch(addPlayingMovies(data));
  } catch (err) {
    console.log("error in fetching the response");
  }
};
