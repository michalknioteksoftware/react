function MovieList({ movies }) {
  return (
    <section className="movie-list">
      <h3>Sample movie list</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title} className="movie-list-item">
            <h4>
              {movie.title} <span>({movie.releaseDate})</span>
            </h4>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;

