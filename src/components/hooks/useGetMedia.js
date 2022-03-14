import { useState, useEffect } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";

function useGetMedia(selectedGenre, pageNumber, fetchGenre) {
  const [mediaData, setMediaData] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    setMediaData([]);
  }, [selectedGenre]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `${fetchGenre}${selectedGenre}&page=${pageNumber}`
        );
        console.log(request.data);
        setMediaData((prevMediaData) => {
          return [...prevMediaData, ...request.data.results];
        });

        if (request.data.page < request.data.total_pages) {
          setHasMorePages(true);
        } else {
          setHasMorePages(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selectedGenre, pageNumber, fetchGenre]);

  return { mediaData, hasMorePages };
}

export default useGetMedia;
