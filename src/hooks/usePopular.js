import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
export const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/popular?page=1`,
      OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data));
  } catch (err) {
    console.log("error in fetching the response");
  }
};
