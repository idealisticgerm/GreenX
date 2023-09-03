import React from "react";
import SearchBar from "../components/Searchbar";
import Pagination from "../pages/Pagination";
import "../styles/explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <SearchBar />
      <Pagination />
    </div>
  );
};

export default Explore;
