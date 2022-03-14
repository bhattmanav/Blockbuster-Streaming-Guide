import { useState, useEffect } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
function useMultiSearch(query, pageNumber) {
  const [mediaData, setMediaData] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    setMediaData([]);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `${requests.fetchSearchedQuery}${query}&page=${pageNumber}&include_adult=false`
        );
        // setMediaData(request.data.results);
        setMediaData((prevMediaData) => {
          return [...prevMediaData, ...request.data.results];
        });

        if (request.data.page < request.data.total_pages) {
          setHasMorePages(true);
        } else {
          setHasMorePages(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();

    return () => {};
  }, [query, pageNumber]);

  return { mediaData, hasMorePages };
}

export default useMultiSearch;
