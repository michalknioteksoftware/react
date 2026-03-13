import { memo } from "react";

function MovieList({ movies, onRemove }) {
  const handleRemoveClick = (movie) => {
    if (!onRemove) return;
    const confirmed = window.confirm(
      `Are you sure you want to remove "${movie.title}" from the list?`
    );
    if (confirmed) {
      onRemove(movie);
    }
  };

  const isEmpty = movies.length === 0;

  return (
    <section className="movie-list">
      <h3>Sample movie list</h3>
      {isEmpty ? (
        <p className="movie-list-empty">
          No movies to show yet. Try adding one above or clear the search.
        </p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.title} className="movie-list-item">
              <div className="movie-list-item-main">
                <h4>
                  {movie.title} <span>({movie.releaseDate})</span>
                </h4>
                <p>{movie.description}</p>
              </div>
              {onRemove && (
                <button
                  type="button"
                  className="movie-remove-button"
                  onClick={() => handleRemoveClick(movie)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default memo(MovieList);

