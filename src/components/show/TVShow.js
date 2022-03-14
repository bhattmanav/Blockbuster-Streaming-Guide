import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Cast from "../cast/Cast";
import Seasons from "../seasons/Seasons";
import WatchProviders from "../watch-providers/WatchProviders";
import Similar from "../similar/Similar";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
function TVShow() {
  const { id } = useParams();
  const [blockbusterDetails, setBlockbusterDetails] = useState([]);
  const [blockbusterCast, setBlockbusterCast] = useState([]);
  const [blockbusterCastExists, setBlockbusterCastExists] = useState(false);
  const [blockbusterSeasons, setBlockbusterSeasons] = useState([]);
  const [blockbusterName, setBlockbusterName] = useState([]);
  const [blockbusterSimilar, setBlockbusterSimilar] = useState([]);
  const [blockbusterReview, setBlockbusterReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `/tv/${id}${requests.fetchTVShowDetails}`
        );
        setBlockbusterDetails(request.data);
        setBlockbusterCast(request.data.credits.cast);
        setBlockbusterCastExists(true);
        setBlockbusterSeasons(request.data.seasons);
        setBlockbusterName(request.data.name);
        setBlockbusterSimilar(request.data.similar.results);
        setBlockbusterReview(request.data.reviews.results);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, [id]);

  return (
    <div className="tv-show-wrapper">
      <Navbar />
      <Banner details={blockbusterDetails} mediaType="/tv/" />
      <Cast
        blockbusterCast={blockbusterCast}
        blockbusterCastExists={blockbusterCastExists}
        mediaType="/tv/"
        ID={id}
        fetchURL={requests.fetchTVShowDetails}
      />
      <Seasons ID={id} />
      <WatchProviders
        ID={id}
        mediaType="/tv/"
        fetchURL={requests.fetchProviders}
      />
      <Similar similarContent={blockbusterSimilar} />
      <Reviews reviews={blockbusterReview} />
      <Footer />
    </div>
  );
}

export default TVShow;
