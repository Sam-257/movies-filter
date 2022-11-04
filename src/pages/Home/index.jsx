import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import "./Home.css";
import data from "../../DB";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    setFilteredList(
      data.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);
  return (
    <div>
      <input
        type="search"
        placeholder="Seach for a movie"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <MovieList data={filteredList} />
    </div>
  );
}

export default Home;
