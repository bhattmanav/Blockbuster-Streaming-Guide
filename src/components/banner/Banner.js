import React, { useState } from "react";
import "./Banner.css";
function Banner({ details, mediaType }) {
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original"
  );
  const checkArrayLength = (array) => {
    return array.length;
  };

  console.log(details);

  return (
    <div
      className="banner-wrapper"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 37, 37, 0.25), rgba(37, 37, 37, 0.45)), url(${imageURL}${details?.backdrop_path})`,
        // backgroundImage: `linear-gradient(rgba(200, 37, 37, 0.05), rgba(200, 37, 37, 0.25))`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__graident-top"></div>
      <div className="banner__main-content">
        {details.images?.logos.length > 0 ? (
          <img
            src={`https://image.tmdb.org/t/p/original${details.images?.logos[0]?.file_path}`}
            alt=""
            className="banner__media-logo"
          />
        ) : (
          <h2 className="banner__media-title">{details.name}</h2>
        )}
        <div className="banner__media-seasons">
          <div className="banner__media-guidance">
            {/* {details.content_ratings?.results} */}
            {details.content_ratings?.results.map((item) => {
              return item.iso_3166_1 === "AU" && item.rating;
              // if (item.iso_3166_1 === "AU") {
              //   return item.rating;
              // } else {
              //   return "NA";
              // }
              // else if (item.iso_3166_1 === "US") {
              //   return item.rating;
              // }
            })}

            {mediaType === "/tv/"
              ? details.content_ratings?.results.map((item) => {
                  return item.iso_3166_1 === "AU" && item.rating;
                  // if (item.iso_3166_1 === "AU") {
                  //   return item.rating;
                  // } else {
                  //   return "NA";
                  // }
                  // else if (item.iso_3166_1 === "US") {
                  //   return item.rating;
                  // }
                })
              : details.release_dates?.results.map((item) => {
                  // return item.release_dates[0].certifications
                  //   ? item.iso_3166_1 === "AU"
                  //   : item.iso_3166_1 === "US";

                  if (item.iso_3166_1 === "AU") {
                    return item.release_dates[0].certification;
                  } else if (item.iso_3166_1 === "US") {
                  }
                  // if (item.iso_3166_1 === "AU") {
                  //   return item.rating;
                  // } else {
                  //   return "NA";
                  // }
                  // else if (item.iso_3166_1 === "US") {
                  //   return item.rating;
                  // }
                })}
          </div>
          <div className="banner__media-subtitles">CC</div>
          <div className="banner__media-release">
            {details.first_air_date?.substring(0, 4)} •
          </div>
          {mediaType === "/tv/" ? (
            <div className="banner__media-season">
              {" "}
              {details.number_of_seasons} Seasons
            </div>
          ) : (
            <div className="banner__media-season">
              {" "}
              ({details.release_date?.substring(0, 4)}){" "}
              {Math.trunc(details.runtime / 60)}h{" "}
              {Math.trunc(details.runtime % 60)}mins
            </div>
          )}
          {/* <div className="banner__media-season">
            {" "}
            {details.number_of_seasons} Seasons
          </div> */}
        </div>
        <span className="banner__media-genre">
          {details.genres?.map((item, index) => {
            return item.name + ", ";
            // return checkArrayLength([item]) === index
            //   ? item.name
            //   : item.name + ", ";
          })}
        </span>
        <p className="banner__media-desc">{details.overview}</p>
        <div className="banner__media-info">
          <button className="banner__watch-now">Watch Now</button>
          <button className="banner__additional-info">Trailer</button>
        </div>
      </div>
      <div className="banner__graident-bottom"></div>
    </div>
  );
}

export default Banner;
