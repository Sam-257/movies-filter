import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import useStyles from "./Home.jss";
import MovieList from "../../components/MovieList";

function Home() {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const { data } = useQuery("movies-list", () => {
    return axios.get("http://localhost:8080/movies");
  });
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (!data) return;
    setFilteredList(
      data.data.data.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [data, searchInput]);

  return (
    <div>
      <input
        className={classes.input}
        type="search"
        placeholder="Seach for a movie"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <MovieList movies={filteredList} />
    </div>
  );
}

export default Home;
