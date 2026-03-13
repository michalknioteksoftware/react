import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieList from "../../components/MovieList";

describe("MovieList", () => {
  let confirmSpy;

  beforeEach(() => {
    confirmSpy = vi.spyOn(window, "confirm").mockImplementation(() => false);
  });

  afterEach(() => {
    confirmSpy.mockRestore();
  });

  it("shows empty state when movies array is empty", () => {
    render(<MovieList movies={[]} />);
    expect(
      screen.getByText(/no movies to show yet/i)
    ).toBeInTheDocument();
  });

  it("renders movie titles and descriptions when movies are provided", () => {
    const movies = [
      {
        title: "Inception",
        description: "A mind-bending thriller.",
        releaseDate: "2010",
      },
      {
        title: "The Matrix",
        description: "Welcome to the real world.",
        releaseDate: "1999",
      },
    ];
    render(<MovieList movies={movies} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("A mind-bending thriller.")).toBeInTheDocument();
    expect(screen.getByText("The Matrix")).toBeInTheDocument();
    expect(screen.getByText("Welcome to the real world.")).toBeInTheDocument();
    expect(screen.getByText(/2010/)).toBeInTheDocument();
    expect(screen.getByText(/1999/)).toBeInTheDocument();
  });

  it("calls onRemove with the correct movie when Remove is clicked and user confirms", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    confirmSpy.mockReturnValue(true);
    const movies = [
      { title: "Inception", description: "Thriller", releaseDate: "2010" },
    ];
    render(<MovieList movies={movies} onRemove={onRemove} />);

    await user.click(screen.getByRole("button", { name: /remove/i }));

    expect(confirmSpy).toHaveBeenCalledWith(
      'Are you sure you want to remove "Inception" from the list?'
    );
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith({
      title: "Inception",
      description: "Thriller",
      releaseDate: "2010",
    });
  });

  it("does not call onRemove when user cancels confirm", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    confirmSpy.mockReturnValue(false);
    const movies = [
      { title: "Inception", description: "Thriller", releaseDate: "2010" },
    ];
    render(<MovieList movies={movies} onRemove={onRemove} />);

    await user.click(screen.getByRole("button", { name: /remove/i }));

    expect(onRemove).not.toHaveBeenCalled();
  });

  it("does not render Remove button when onRemove is not provided", () => {
    const movies = [
      { title: "Inception", description: "Thriller", releaseDate: "2010" },
    ];
    render(<MovieList movies={movies} />);
    expect(screen.queryByRole("button", { name: /remove/i })).not.toBeInTheDocument();
  });
});
