import { memo } from "react";

function MovieSearchInput({ value, onChange }) {
  return (
    <div className="movie-search-row">
      <input
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default memo(MovieSearchInput);

