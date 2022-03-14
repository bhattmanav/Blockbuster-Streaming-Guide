import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
import "./Seasons.css";
function Seasons({ ID }) {
  const [blockbusterSeasonDetails, setBlockbusterSeasonDetails] = useState([]);
  const [season, setSeason] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `/tv/${ID}${requests.fetchTVSeasons}${season}`
        );
        setBlockbusterSeasonDetails(request.data);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, [ID, season]);

  const checkDescriptionLength = (description = "") => {
    if (description.length > 76) {
      return description.substring(0, 76) + " ...";
    } else {
      return description;
    }
  };

  return (
    <div className="seasons-wrapper">
      <div className="seasons__change-seasons">
        <h4 className="seasons__title">Episodes</h4>
        <select
          name="seasons"
          id="seasons"
          onChange={(e) => {
            setSeason(e.target.value);
          }}
        >
          {/* {blockbusterSeasonDetails.seasons
            ?.slice(1, blockbusterSeasonDetails.number_of_seasons + 1)
            .map((item, index) => {
              return (
                <option
                  value={item.season_number}
                  className="seasons__select-season"
                >
                  {blockbusterSeasonDetails.name}: {item.name}
                </option>
              );
            })} */}

          {blockbusterSeasonDetails?.seasons &&
          blockbusterSeasonDetails?.seasons[0]?.name === "Specials"
            ? blockbusterSeasonDetails.seasons
                ?.slice(1, blockbusterSeasonDetails.number_of_seasons + 1)
                .map((item, index) => {
                  return (
                    <option
                      value={item.season_number}
                      className="seasons__select-season"
                    >
                      {blockbusterSeasonDetails.name}: {item.name}
                    </option>
                  );
                })
            : blockbusterSeasonDetails.seasons
                ?.slice(0, blockbusterSeasonDetails.number_of_seasons + 1)
                .map((item, index) => {
                  return (
                    <option
                      value={item.season_number}
                      className="seasons__select-season"
                    >
                      {blockbusterSeasonDetails.name}: {item.name}
                    </option>
                  );
                })}

          {/* {blockbusterSeasonDetails?.seasons[0]?.name === "Specials" &&
            blockbusterSeasonDetails.seasons
              ?.slice(1, blockbusterSeasonDetails.number_of_seasons + 1)
              .map((item, index) => {
                return (
                  <option
                    value={item.season_number}
                    className="seasons__select-season"
                  >
                    {blockbusterSeasonDetails.name}: {item.name}
                  </option>
                );
              })} */}
        </select>
      </div>
      <div className="seasons__episodes">
        {blockbusterSeasonDetails[`season/${season}`]?.episodes?.map((item) => {
          return (
            <div className="seasons__episode">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.still_path}`}
                alt=""
                className="seasons__episode-image"
              />
              <div className="seasons__episode-details">
                <div className="seasons__episode-top-container">
                  <h4 className="seasons__episode-title">
                    {`${item.episode_number}. ${item.name}`}
                  </h4>
                  <span className="seasons__episode-time">
                    {blockbusterSeasonDetails.episode_run_time[0]} mins
                  </span>
                </div>
                <p className="seasons__episode-desc">
                  {checkDescriptionLength(item.overview)}
                </p>
              </div>
            </div>
          );
        })}
        {/* <div className="seasons__episode">
          <img
            src="https://image.tmdb.org/t/p/original/icjOgl5F9DhysOEo6Six2Qfwcu2.jpg"
            alt=""
            className="seasons__episode-image"
          />
          <div className="seasons__episode-details">
            <div className="seasons__episode-top-container">
              <h4 className="seasons__episode-title">
                1. The King Has Returned
              </h4>
              <span className="seasons__episode-time">50 min</span>
            </div>
            <p className="seasons__episode-desc">
              Donec dapibus semper tempus. Aliquam vel ultricies turpis. Donec
              ac gravida lacus.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Seasons;
