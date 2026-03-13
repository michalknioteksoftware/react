"use client";

import { useState, useMemo } from "react";
import MovieList from "./MovieList";
import AddMovieForm from "./AddMovieForm";

export default function MoviesClient({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [movieSearch, setMovieSearch] = useState("");

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(movieSearch.toLowerCase())
      ),
    [movies, movieSearch]
  );

  const handleAddMovie = (movie) => {
    setMovies((current) => [...current, { ...movie, rating: Number(movie.rating) || 5 }]);
  };

  const handleRemoveMovie = (movieToRemove) => {
    setMovies((current) => current.filter((m) => m !== movieToRemove));
  };

  return (
    <>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <div className="movie-search">
        <input
          type="search"
          placeholder="Search by title..."
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
          aria-label="Search movies"
        />
      </div>
      <MovieList movies={filteredMovies} onRemove={handleRemoveMovie} />
    </>
  );
}
