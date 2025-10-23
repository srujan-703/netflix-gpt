import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/movieSlice";
export const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/now_playing?page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      }
    );
    const data = await res.json();
    dispatch(addPlayingMovies(data));
  } catch (err) {
    console.log("error in fetching the response");
  }
};
