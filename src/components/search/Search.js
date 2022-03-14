import React from "react";
import BodySearch from "../body-search/BodySearch";
import Navbar from "../navbar/Navbar";
import "./Search.css";
function Search() {
  return (
    <div className="search-wrapper">
      <Navbar />
      <BodySearch />
    </div>
  );
}

export default Search;
