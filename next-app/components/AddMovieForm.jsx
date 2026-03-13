"use client";

import { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Title is required.");
      return;
    }
    if (onAddMovie) {
      onAddMovie({
        title: trimmed,
        description: description.trim(),
        releaseDate: releaseDate.trim(),
        rating: Number(rating) || 5,
      });
    }
    setTitle("");
    setDescription("");
    setReleaseDate("");
    setRating(5);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <label className="movie-form-field">
        <span>Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="My new movie"
        />
        {error && <span className="field-error">{error}</span>}
      </label>
      <label className="movie-form-field">
        <span>Description</span>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short summary..."
        />
      </label>
      <label className="movie-form-field">
        <span>Release date</span>
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </label>
      <label className="movie-form-field">
        <span>Rating (0–10)</span>
        <input
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <button type="submit">Add movie</button>
    </form>
  );
}
