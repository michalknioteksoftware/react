import { memo } from "react";

function MovieList({ movies, onRemove, onExitComplete, lastAddedTitle }) {
  const handleRemoveClick = (movie) => {
    if (!onRemove || movie._exiting) return;
    const confirmed = window.confirm(
      `Are you sure you want to remove "${movie.title}" from the list?`
    );
    if (confirmed) {
      onRemove(movie);
    }
  };

  const handleExitAnimationEnd = (e, movie) => {
    if (e.animationName === "movie-fade-out" && onExitComplete) {
      onExitComplete(movie);
    }
  };

  const isEmpty = movies.length === 0;

  return (
    <section className="movie-list" aria-labelledby="movie-list-heading">
      <h3 id="movie-list-heading">Sample movie list</h3>
      {isEmpty ? (
        <p className="movie-list-empty">
          No movies to show yet. Try adding one above or clear the search.
        </p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li
              key={movie.title}
              className={[
                "movie-list-item",
                lastAddedTitle === movie.title && "movie-list-item-new",
                movie._exiting && "movie-list-item-exiting",
              ]
                .filter(Boolean)
                .join(" ")}
              onAnimationEnd={movie._exiting ? (e) => handleExitAnimationEnd(e, movie) : undefined}
            >
              <div className="movie-list-item-main">
                <h4>
                  {movie.title} <span>({movie.releaseDate})</span>
                </h4>
                <p>{movie.description}</p>
              </div>
              {onRemove && !movie._exiting && (
                <button
                  type="button"
                  className="movie-remove-button"
                  onClick={() => handleRemoveClick(movie)}
                  aria-label={`Remove ${movie.title} from list`}
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

