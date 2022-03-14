import React from "react";
import Navbar from "../navbar/Navbar";
import Genre from "../genre/Genre";
import requests from "../requests/Requests";

function MovieGenre() {
  return (
    <div className="moviegenre-wrapper">
      <Navbar />
      <Genre
        mediaType="/movie/"
        defaultGenre="28"
        fetchGenreList={`${requests.fetchGenreMovieList}`}
        title="Movies"
        fetchGenre={`${requests.fetchGenreMovie}`}
      />
    </div>
  );
}

export default MovieGenre;
