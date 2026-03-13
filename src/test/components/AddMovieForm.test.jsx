import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMovieForm from "../../components/AddMovieForm";

describe("AddMovieForm", () => {
  let onAddMovie;

  beforeEach(() => {
    onAddMovie = vi.fn();
  });

  it("calls onAddMovie with form data when submitted with valid title", async () => {
    const user = userEvent.setup();
    render(<AddMovieForm onAddMovie={onAddMovie} />);

    await user.type(screen.getByPlaceholderText("My new movie"), "Inception");
    await user.click(screen.getByRole("button", { name: /add movie/i }));

    expect(onAddMovie).toHaveBeenCalledTimes(1);
    expect(onAddMovie).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Inception",
        description: "",
        releaseDate: "",
        rating: 5,
      })
    );
  });

  it("calls onAddMovie with full data when all fields are filled", async () => {
    const user = userEvent.setup();
    render(<AddMovieForm onAddMovie={onAddMovie} />);

    await user.type(screen.getByPlaceholderText("My new movie"), "The Matrix");
    await user.type(
      screen.getByPlaceholderText("Short summary of the movie..."),
      "A hacker learns the truth."
    );
    const dateInput = screen.getByLabelText(/release date/i);
    await user.type(dateInput, "1999-03-31");
    const ratingInput = screen.getByLabelText(/rating \(0–10\)/i);
    await user.clear(ratingInput);
    await user.type(ratingInput, "9");
    await user.click(screen.getByRole("button", { name: /add movie/i }));

    expect(onAddMovie).toHaveBeenCalledTimes(1);
    expect(onAddMovie).toHaveBeenCalledWith({
      title: "The Matrix",
      description: "A hacker learns the truth.",
      releaseDate: "1999-03-31",
      rating: 9,
    });
  });

  it("shows validation error and does not call onAddMovie when title is empty", async () => {
    const user = userEvent.setup();
    render(<AddMovieForm onAddMovie={onAddMovie} />);

    await user.click(screen.getByRole("button", { name: /add movie/i }));

    expect(screen.getByText("Title is required.")).toBeInTheDocument();
    expect(onAddMovie).not.toHaveBeenCalled();
  });

  it("does not call onAddMovie when prop is not provided", async () => {
    const user = userEvent.setup();
    render(<AddMovieForm />);

    await user.type(screen.getByPlaceholderText("My new movie"), "No callback");
    await user.click(screen.getByRole("button", { name: /add movie/i }));

    expect(onAddMovie).not.toHaveBeenCalled();
  });
});
