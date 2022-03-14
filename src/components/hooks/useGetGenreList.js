import { useEffect, useState } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";

function useGetGenreList(fetchURL) {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchURL);
        setGenreList(request.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { genreList };
}

export default useGetGenreList;
