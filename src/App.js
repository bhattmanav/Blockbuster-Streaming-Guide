import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import SignUp from "./components/sign-up/SignUp";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import TVGenre from "./components/tv-genre/TVGenre";
import MovieGenre from "./components/movie-genre/MovieGenre";
import Search from "./components/search/Search";
import TVShow from "./components/show/TVShow";
import Movie from "./components/movie/Movie";
import "./App.css";
import Testing from "./components/testing/Testing";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Home />} />
        <Route path="/browse/tv" element={<TVGenre />} />
        <Route path="/browse/movies" element={<MovieGenre />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tv/:id" element={<TVShow />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
