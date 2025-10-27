import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
export const useTopRatedMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/top_rated?page=1`,
      OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRatedMovies(data));
  } catch (err) {
    console.log("error in fetching the response");
  }
};
