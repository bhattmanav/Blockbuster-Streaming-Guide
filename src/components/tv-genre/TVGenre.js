import React from "react";
import requests from "../requests/Requests";
import Navbar from "../navbar/Navbar";
import Genre from "../genre/Genre";
import Footer from "../footer/Footer";
function TVGenre() {
  return (
    <div className="tvgenre-wrapper">
      <Navbar />
      <Genre
        mediaType="/tv/"
        defaultGenre="10759"
        fetchGenreList={`${requests.fetchGenreShowsList}`}
        title="TV Shows"
        fetchGenre={`${requests.fetchGenreShows}`}
      />
    </div>
  );
}

export default TVGenre;
