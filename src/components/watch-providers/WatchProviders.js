import React, { useEffect, useState } from "react";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
import "./WatchProviders.css";
function WatchProviders({ ID, mediaType, fetchURL }) {
  const [blockbusterProviders, setBlockbusterProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("AE");
  const [imageURL, setImageURL] = useState(
    "https://image.tmdb.org/t/p/original"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const request = await axios.get(
        //   `/tv/${ID}${requests.fetchTVProviders}`
        // );
        const request = await axios.get(`${mediaType}${ID}${fetchURL}`);
        setBlockbusterProviders(request.data);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, [ID, selectedProvider, fetchURL, mediaType]);
  return (
    <div className="watch-providers-wrapper">
      <div className="watch-providers__filters">
        <h4 className="watch-providers__title">Watch Now</h4>
        <select
          name="providers"
          id="providers"
          onChange={(e) => {
            setSelectedProvider(e.target.value);
          }}
        >
          {blockbusterProviders["watch/providers"] &&
            Object.keys(blockbusterProviders["watch/providers"].results).map(
              (item) => {
                return <option value={item}>{item}</option>;
              }
            )}
        </select>
      </div>
      <div className="watch-providers__watch-now">
        <div className="watch-providers__stream">
          <div className="watch-providers__watch-now-title" id="stream">
            Stream
          </div>
          {blockbusterProviders["watch/providers"]?.results[
            `${selectedProvider}`
          ]?.flatrate?.map((item) => {
            return (
              <div className="watch-providers__logo-wrapper">
                <img
                  src={`${imageURL}${item.logo_path}`}
                  alt=""
                  className="watch-provider__logo"
                />
                <span className="watch-provider__name">
                  {/* {item.provider_name} */}
                </span>
              </div>
            );
          })}
        </div>
        <div className="watch-providers__buy">
          <div className="watch-providers__watch-now-title" id="buy">
            Buy
          </div>
          {blockbusterProviders["watch/providers"]?.results[
            `${selectedProvider}`
          ]?.buy?.map((item) => {
            return (
              <div className="watch-providers__logo-wrapper">
                <img
                  src={`${imageURL}${item.logo_path}`}
                  alt=""
                  className="watch-provider__logo"
                />
                <span className="watch-provider__name">
                  {/* {item.provider_name} */}
                </span>
              </div>
            );
          })}
        </div>
        <div className="watch-providers__rent">
          <div className="watch-providers__watch-now-title" id="rent">
            Rent
          </div>
          {blockbusterProviders["watch/providers"]?.results[
            `${selectedProvider}`
          ]?.rent?.map((item) => {
            return (
              <div className="watch-providers__logo-wrapper">
                <img
                  src={`${imageURL}${item.logo_path}`}
                  alt=""
                  className="watch-provider__logo"
                />
                <span className="watch-provider__name">
                  {/* {item.provider_name} */}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WatchProviders;
