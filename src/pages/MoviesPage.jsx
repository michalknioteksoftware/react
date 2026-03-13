import { useMemo } from "react";
import AddMovieForm from "../components/AddMovieForm.jsx";
import MovieSearchInput from "../components/MovieSearchInput.jsx";
import MovieList from "../components/MovieList.jsx";
import MovieRatingsChart from "../components/MovieRatingsChart.jsx";

function MoviesPage({
  movies,
  movieSearch,
  setMovieSearch,
  isMovieListDark,
  toggleMovieListDark,
  handleAddMovie,
  handleRemoveMovie,
}) {
  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(movieSearch.toLowerCase())
      ),
    [movies, movieSearch]
  );

  return (
    <section
      className={`content content-movies ${
        isMovieListDark ? "movies-dark" : "movies-light"
      }`}
    >
      <h2>Example movie list</h2>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieSearchInput
        value={movieSearch}
        onChange={setMovieSearch}
      />
      <button
        type="button"
        onClick={toggleMovieListDark}
      >
        Switch to {isMovieListDark ? "light" : "dark"} mode
      </button>
      <MovieList
        movies={filteredMovies}
        onRemove={handleRemoveMovie}
      />
      <MovieRatingsChart movies={filteredMovies} />
    </section>
  );
}

export default MoviesPage;

