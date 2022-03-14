import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetGenreList from "../hooks/useGetGenreList";
import useGetMedia from "../hooks/useGetMedia";
import useReachedBottom from "../hooks/useReachedBottom";
import "./Genre.css";
function Genre({ mediaType, defaultGenre, fetchGenreList, title, fetchGenre }) {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);
  const [pageNumber, setPageNumber] = useState(1);
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original"
  );
  const { genreList } = useGetGenreList(fetchGenreList);
  const { mediaData, hasMorePages } = useGetMedia(
    selectedGenre,
    pageNumber,
    fetchGenre
  );

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
  return (
    <div className="genre-wrapper">
      <div className="genre__select-genre">
        <span className="genre__title">{title}</span>
        <select
          onChange={(e) => {
            setSelectedGenre(e.target.value);
            setPageNumber(1);
          }}
          name="genre"
          className="genre__all-genre"
        >
          {genreList.map((genre) => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>
      </div>
      <div className="genre__gradient"></div>
      <div className="genre__media">
        <div className="genre__results">
          <div className="genre__selected-results">
            {mediaData.map((item) => {
              return item.poster_path == null ? (
                <div className="genre__no-results">
                  <h3>Image could not be found.</h3>
                </div>
              ) : (
                <img
                  className="genre__selected-result"
                  src={imageURL + item.poster_path}
                  alt=""
                  onClick={() => {
                    navigate(`${mediaType}${item.id}`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genre;
