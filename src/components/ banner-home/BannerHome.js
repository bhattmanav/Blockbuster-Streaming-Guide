import React, { useEffect, useState } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
import "./BannerHome.css";
function BannerHome() {
  const [blockbusterMedia, setBlockbusterMedia] = useState([]);
  const [blockbusterMediaAdditional, setBlockbusterMediaAdditional] = useState(
    []
  );
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchTrending);
        let randomNumber = Math.floor(
          Math.random() * request.data.results.length - 1 + 1
        );
        setBlockbusterMedia(request.data.results[randomNumber]);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchMediaData = async () => {
      if (blockbusterMedia.media_type === "movie") {
        try {
          const requestAdditionalData = await axios.get(
            `/movie/${blockbusterMedia.id}${requests.fetchMovieData}`
          );
          setBlockbusterMediaAdditional(
            requestAdditionalData.data.images.logos[0]
          );
          // console.log(requestAdditionalData);
        } catch (error) {}
      } else if (blockbusterMedia.media_type === "tv") {
        try {
          const requestAdditionalData = await axios.get(
            `/tv/${blockbusterMedia.id}${requests.fetchTVData}`
          );
          setBlockbusterMediaAdditional(
            requestAdditionalData.data.images.logos[0]
          );

          // console.log(requestAdditionalData);
        } catch (error) {}
      }
    };

    fetchMediaData();
  }, [blockbusterMedia]);

  const checkDescriptionLength = (description = "") => {
    if (description.length > 174) {
      return description.substring(0, 174) + " ...";
    } else {
      return description;
    }
  };

  return (
    <div
      className="banner-home-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 37, 37, 0.05), rgba(37, 37, 37, 0.25)), url(${imageURL}${blockbusterMedia?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-home__full-gradient"></div>
      <div className="banner-home__gradient"></div>
      <div className="banner-home__content">
        <img
          src={`${imageURL}${blockbusterMediaAdditional?.file_path}`}
          alt=""
          className="banner-home__logo"
        />
        <p className="banner-home__desc">
          {/* Luca and his best friend Alberto experience an unforgettable summer on
      the Italian Riviera. But all the fun is threatened by a deeply-held
      secret: they are sea monsters from another world just below the
      water’s surface. */}
          {checkDescriptionLength(blockbusterMedia.overview)}
        </p>
        <div className="banner-home__watch">
          <button className="banner-home__watch-now">Watch Now</button>
          <button className="banner-home__learn">Learn More</button>
        </div>
      </div>
      <div className="banner-home__gradient-bottom"></div>
    </div>
  );
}

export default BannerHome;
