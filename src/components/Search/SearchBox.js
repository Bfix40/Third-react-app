import React, { useState } from "react";
import LocationContainer from "../Locations/LocationContainer.js";
import ResidentContainer from "../Residents/ResidentsContainer.js";
import SearchResults from "./SearchResults.js";

const query = Math.ceil(Math.random() * 108) + 1;

const SearchBox = () => {
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );
  const [search, setSearch] = useState("");
  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="type a location"
      />
      {search !== "" && (
        <SearchResults
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />
      )}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </>
  );
};

export default SearchBox;
