import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm) {
        navigate("/search?s=" + searchTerm);
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchTerm, navigate]);

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  return (
    <div id="search">
      <form>
        <label>Search</label>
        <input type="text" name="search" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Search;
