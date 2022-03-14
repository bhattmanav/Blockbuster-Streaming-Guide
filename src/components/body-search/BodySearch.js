import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMultiSearch from "../hooks/useMultiSearch";
import useReachedBottom from "../hooks/useReachedBottom";
import "./BodySearch.css";

function BodySearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original"
  );

  const { mediaData, hasMorePages } = useMultiSearch(query, pageNumber);

  const fetchMoreMedia = (event) => {
    const maxY = document.body.scrollHeight - window.innerHeight;
    if (hasMorePages === true) {
      if (window.scrollY >= maxY) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      } else {
      }
    }
  };

  useReachedBottom(hasMorePages, fetchMoreMedia);

  const navigateToPage = (item) => {
    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else if (item.media_type === "tv") {
      navigate(`/tv/${item.id}`);
    }
    // else if (mediaType === "movie") {
    //   navigate(`/movie/${slide.id}`);
    // } else if (mediaType === "tv") {
    //   navigate(`/tv/${slide.id}`);
    // }
  };

  return (
    // <div className="body-search-wrapper">
    //   <div className="body-search__gradient"></div>
    //   <div className="body-search__media">
    //     <div className="body-search__search">
    //       <input
    //         className="body-search__search-field"
    //         type="text"
    //         name=""
    //         id=""
    //         placeholder="Search by movie, or tv shows..."
    //         value={query}
    //         onChange={(e) => {
    //           setQuery(e.target.value);
    //           setPageNumber(1);
    //         }}
    //       />
    //     </div>
    //     <div className="body-search__search-results">
    //       <div className="body-search__query-results">
    //         {mediaData.map((item) => {
    //           return item.poster_path == null ? (
    //             <div className="body-search__query-not-found">
    //               {/* <h3>Image could not be found.</h3> */}
    //               <h3>{item.original_title || item.title || item.name}</h3>
    //             </div>
    //           ) : (
    //             <img
    //               className="body-search__query-result"
    //               src={imageURL + item.poster_path}
    //               alt=""
    //               onClick={() => {
    //                 navigateToPage(item);
    //               }}
    //             />
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="ss-body">
      <div className="ss-body__gradient"></div>
      <div className="ss-body__media">
        <div className="ss-body__search">
          <input
            className="ss-body__search-field"
            type="text"
            name=""
            id=""
            placeholder="Search by movie, or tv shows..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPageNumber(1);
            }}
          />
        </div>
        <div className="ss-body__search-results">
          <div className="ss-body__query-results">
            {mediaData.map((item) => {
              return item.poster_path == null ? (
                <div className="ss-body__query-result--unactive">
                  {/* <h3>Image could not be found.</h3> */}
                  <h3>{item.original_title || item.title || item.name}</h3>
                </div>
              ) : (
                <img
                  className="ss-body__query-result"
                  src={imageURL + item.poster_path}
                  alt=""
                  onClick={() => {
                    navigateToPage(item);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default BodySearch;
