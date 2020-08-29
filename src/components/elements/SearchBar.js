import React, { useRef } from "react";
import "./Searchbar.css";
const SearchBar = ({ callback }) => {
  const timeOut = useRef(null);
  const Search = (item) => {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      callback(item);
    }, 500);
  };
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Browse Movies"
          onChange={(event) => Search(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
