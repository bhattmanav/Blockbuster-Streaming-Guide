import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/Axios";
import requests from "../requests/Requests";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Cast from "../cast/Cast";
import WatchProviders from "../watch-providers/WatchProviders";
import Similar from "../similar/Similar";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

function Movie() {
  const { id } = useParams();
  const [blockbusterDetails, setBlockbusterDetails] = useState([]);
  const [blockbusterCast, setBlockbusterCast] = useState([]);
  const [blockbusterCastExists, setBlockbusterCastExists] = useState(false);
  const [blockbusterName, setBlockbusterName] = useState([]);
  const [blockbusterSimilar, setBlockbusterSimilar] = useState([]);
  const [blockbusterReview, setBlockbusterReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          `/movie/${id}${requests.fetchMovieDetails}`
        );
        setBlockbusterDetails(request.data);
        setBlockbusterCast(request.data.credits.cast);
        setBlockbusterCastExists(true);
        setBlockbusterName(request.data.name);
        setBlockbusterSimilar(request.data.similar.results);
        setBlockbusterReview(request.data.reviews.results);
      } catch (error) {}
      //   return request;
    };

    fetchData();
  }, [id]);

  console.log(blockbusterCast);

  return (
    <div className="movie-wrapper">
      <Navbar />
      <Banner details={blockbusterDetails} />
      <Cast
        blockbusterCast={blockbusterCast}
        blockbusterCastExists={blockbusterCastExists}
      />
      <WatchProviders
        ID={id}
        mediaType="/movie/"
        fetchURL={requests.fetchProviders}
      />
      <Similar similarContent={blockbusterSimilar} />
      <Reviews reviews={blockbusterReview} />
      <Footer />
    </div>
  );
}

export default Movie;
