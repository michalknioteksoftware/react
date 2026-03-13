import { getMovies } from "@/lib/data";
import MoviesClient from "@/components/MoviesClient";

export default async function MoviesPage() {
  const initialMovies = await getMovies();

  return (
    <main className="content content-movies">
      <h2>Movies (server-fetched)</h2>
      <p className="description">
        Initial list is loaded on the server. You can add or remove items (client state).
      </p>
      <MoviesClient initialMovies={initialMovies} />
      <div className="page-meta" style={{ marginTop: "1.5rem" }}>
        <strong>Server-side:</strong> <code>getMovies()</code> runs on the server when you
        request this page. The list you see first is from that fetch.
      </div>
    </main>
  );
}
