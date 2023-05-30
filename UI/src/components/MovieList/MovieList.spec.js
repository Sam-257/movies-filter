/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieList from ".";

describe("MovieList Component test", () => {
  const movies = [
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      runtime: "127",
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      runtime: "97",
      genres: ["Adventure", "Comedy"],
      director: "Peter Faiman",
      actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
      plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
  ];

  beforeEach(() =>
    render(
      <BrowserRouter>
        <MovieList movies={movies} />
      </BrowserRouter>
    )
  );

  afterEach(() => cleanup());

  it("should redirect to movies page", () => {
    const redirectLink = screen.getAllByTestId("movie-page-redirect");
    redirectLink.map((item) => expect(item).toHaveAttribute("href", "/movie"));
  });

  it("should render all movies in the list", () => {
    const redirectLink = screen.getAllByTestId("movie-page-redirect");
    expect(redirectLink.length).toBe(movies.length);
  });
});
