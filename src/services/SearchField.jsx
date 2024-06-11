import React from "react";

const SearchField = ({ setSearchName }) => {
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchName(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Name suchen..." onChange={handleSearch} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchField;
