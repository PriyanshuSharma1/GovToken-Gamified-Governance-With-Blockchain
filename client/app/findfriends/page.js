"use client";
import React, { useState } from "react";

const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <div style={{ margin: 24 + "px", height: 64 + "px" }}>
      <input
        type="search"
        placeholder="Find Friends"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default searchBar;
