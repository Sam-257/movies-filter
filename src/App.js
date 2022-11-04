import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
