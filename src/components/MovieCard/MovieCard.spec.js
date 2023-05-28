/* eslint-disable no-undef */
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import MovieCard from "./index";

describe("MovieCard component", () => {
  const movie = {
    id: 2,
    title: "The Cotton Club",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  };

  beforeEach(() =>
    render(
      <MovieCard
        id={movie.id}
        title={movie.title}
        actors={movie.actors}
        posterUrl={movie.posterUrl}
      />
    )
  );

  afterEach(() => cleanup());

  it("Should render the image", () => {
    const poster = screen.getByTestId(`poster-${movie.id}`);
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute("src", movie.posterUrl);
  });

  it("Should render the title", () => {
    const title = screen.getByTestId(`title-${movie.id}`);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(movie.title);
  });

  it("Should render the actors", () => {
    const actors = screen.getByTestId(`actors-${movie.id}`);
    expect(actors).toBeInTheDocument();
    expect(actors).toHaveTextContent(movie.actors);
  });
});
