import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("5");
  const [titleError, setTitleError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setTitleError("Title is required.");
      return;
    }

    setTitleError("");

    const newMovie = {
      title: title.trim(),
      description: description.trim(),
      releaseDate,
      rating: Number(rating) || 0,
    };

    if (onAddMovie) {
      onAddMovie(newMovie);
    }

    setTitle("");
    setDescription("");
    setReleaseDate("");
    setRating("5");
  };

  return (
    <section className="playground">
      <h3>Example solution for exercise 6</h3>
      <p>Fill in the form below to practice controlled inputs.</p>
      <form className="movie-form" onSubmit={handleSubmit}>
        <label className="movie-form-field">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (event.target.value.trim()) {
                setTitleError("");
              }
            }}
            placeholder="My new movie"
          />
          {titleError && <span className="field-error">{titleError}</span>}
        </label>

        <label className="movie-form-field">
          <span>Description</span>
          <textarea
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Short summary of the movie..."
          />
        </label>

        <label className="movie-form-field">
          <span>Release date</span>
          <input
            type="date"
            value={releaseDate}
            onChange={(event) => setReleaseDate(event.target.value)}
          />
        </label>

        <label className="movie-form-field">
          <span>Rating (0–10)</span>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
        </label>

        <button type="submit" className="exercise-button">
          Add movie
        </button>
      </form>

      <div className="movie-form-preview">
        <h4>Live preview</h4>
        <p>
          <strong>Title:</strong> {title || "—"}
        </p>
        <p>
          <strong>Description:</strong> {description || "—"}
        </p>
        <p>
          <strong>Release date:</strong> {releaseDate || "—"}
        </p>
        <p>
          <strong>Rating:</strong> {rating || "—"}
        </p>
      </div>
    </section>
  );
}

export default AddMovieForm;

