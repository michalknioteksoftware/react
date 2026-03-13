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
    <section className="playground">
      <h3>Example solution for exercise 6</h3>
      <p>Fill in the form below to practice controlled inputs with validation.</p>
      <form className="movie-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="movie-form-field">
          <span>Title</span>
          <input
            type="text"
            {...register("title")}
            placeholder="My new movie"
          />
          {errors.title && (
            <span className="field-error">{errors.title.message}</span>
          )}
        </label>

        <label className="movie-form-field">
          <span>Description</span>
          <textarea
            rows={3}
            {...register("description")}
            placeholder="Short summary of the movie..."
          />
          {errors.description && (
            <span className="field-error">{errors.description.message}</span>
          )}
        </label>

        <label className="movie-form-field">
          <span>Release date</span>
          <input
            type="date"
            {...register("releaseDate")}
          />
        </label>

        <label className="movie-form-field">
          <span>Rating (0–10)</span>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            {...register("rating", { valueAsNumber: true })}
          />
          {errors.rating && (
            <span className="field-error">{errors.rating.message}</span>
          )}
        </label>

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

