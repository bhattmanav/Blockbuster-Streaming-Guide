import React from "react";
import requests from "../requests/Requests";
import Navbar from "../navbar/Navbar";
import BannerHome from "../ banner-home/BannerHome";
import SmallRow from "../small-row/SmallRow";
import MediumRow from "../medium-row/MediumRow";
import BigRow from "../big-row/BigRow";
import Footer from "../footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <BannerHome />
      <SmallRow
        title="Recommended For You"
        fetchURL={requests.fetchTopRated}
        mediaType="movie"
        // padding="75px"
        // paddingBottom="75px"
      />
      <SmallRow
        title="Top 20 in Australia Today"
        fetchURL={requests.fetchTrending}
      />
      <SmallRow
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        mediaType="movie"
      />
      <SmallRow
        title="Coming Soon"
        fetchURL={requests.fetchUpcoming}
        mediaType="movie"
      />
      <SmallRow
        title="Comedies"
        fetchURL={requests.fetchComedyMovies}
        mediaType="movie"
      />
      <MediumRow
        title="Blockbuster Originals"
        fetchURL={requests.fetchNetflixOriginals}
        mediaType="tv"
      />
      <SmallRow
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        mediaType="movie"
      />
      <SmallRow
        title="US TV Shows"
        fetchURL={requests.fetchTopRatedTVShows}
        mediaType="tv"
      />
      <BigRow
        title="New Arrivals"
        fetchURL={requests.fetchNewArrivals}
        mediaType="movie"
      />
      <SmallRow
        title="Thriller Movies"
        fetchURL={requests.fetchThrillerMovies}
        mediaType="movie"
      />
      <SmallRow
        title="Children & Family Movies"
        fetchURL={requests.fetchFamilyMovies}
        paddingBottom="50px"
        mediaType="movie"
      />
      <Footer />
    </div>
  );
}

export default Home;
