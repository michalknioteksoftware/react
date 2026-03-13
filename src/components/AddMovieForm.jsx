import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const movieSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(100, "Title should be at most 100 characters."),
  description: z
    .string()
    .max(500, "Description should be at most 500 characters.")
    .optional()
    .or(z.literal("")),
  releaseDate: z
    .string()
    .optional()
    .or(z.literal("")),
  rating: z
    .number({
      invalid_type_error: "Rating must be a number.",
    })
    .min(0, "Rating must be at least 0.")
    .max(10, "Rating must be at most 10."),
});

function AddMovieForm({ onAddMovie }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      title: "",
      description: "",
      releaseDate: "",
      rating: 5,
    },
  });

  const values = watch();

  const onSubmit = (data) => {
    if (onAddMovie) {
      onAddMovie(data);
    }
    reset({
      title: "",
      description: "",
      releaseDate: "",
      rating: 5,
    });
  };

  return (
    <section className="playground" aria-labelledby="add-movie-heading">
      <h3 id="add-movie-heading">Example solution for exercise 6</h3>
      <p>Fill in the form below to practice controlled inputs with validation.</p>
      <form className="movie-form" onSubmit={handleSubmit(onSubmit)} aria-label="Add a new movie">
        <div className="movie-form-field">
          <label htmlFor="movie-title">Title</label>
          <input
            id="movie-title"
            type="text"
            {...register("title")}
            placeholder="My new movie"
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? "movie-title-error" : undefined}
          />
          {errors.title && (
            <span id="movie-title-error" className="field-error" role="alert">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="movie-form-field">
          <label htmlFor="movie-description">Description</label>
          <textarea
            id="movie-description"
            rows={3}
            {...register("description")}
            placeholder="Short summary of the movie..."
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "movie-description-error" : undefined}
          />
          {errors.description && (
            <span id="movie-description-error" className="field-error" role="alert">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="movie-form-field">
          <label htmlFor="movie-release-date">Release date</label>
          <input
            id="movie-release-date"
            type="date"
            {...register("releaseDate")}
          />
        </div>

        <div className="movie-form-field">
          <label htmlFor="movie-rating">Rating (0–10)</label>
          <input
            id="movie-rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            {...register("rating", { valueAsNumber: true })}
            aria-invalid={Boolean(errors.rating)}
            aria-describedby={errors.rating ? "movie-rating-error" : undefined}
          />
          {errors.rating && (
            <span id="movie-rating-error" className="field-error" role="alert">
              {errors.rating.message}
            </span>
          )}
        </div>

        <button type="submit" className="exercise-button">
          Add movie
        </button>
      </form>

      <div className="movie-form-preview">
        <h4>Live preview</h4>
        <p>
          <strong>Title:</strong> {values.title || "—"}
        </p>
        <p>
          <strong>Description:</strong> {values.description || "—"}
        </p>
        <p>
          <strong>Release date:</strong> {values.releaseDate || "—"}
        </p>
        <p>
          <strong>Rating:</strong> {values.rating ?? "—"}
        </p>
      </div>
    </section>
  );
}

export default AddMovieForm;

