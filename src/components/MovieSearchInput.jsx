import { memo } from "react";

function MovieSearchInput({ value, onChange }) {
  return (
    <div className="movie-search-row">
      <label htmlFor="movie-search-input" className="visually-hidden">
        Search movies by title
      </label>
      <input
        id="movie-search-input"
        type="search"
        placeholder="Search by title..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search movies by title"
        autoComplete="off"
      />
    </div>
  );
}

export default memo(MovieSearchInput);

