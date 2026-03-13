import { getExercises } from "@/lib/data";
import HomeContent from "@/components/HomeContent";

export default async function HomePage() {
  const exercises = await getExercises();

  return (
    <main className="layout">
      <section className="sidebar">
        <h2>Exercises</h2>
        <HomeContent exercises={exercises} />
      </section>
      <section className="content">
        <h2>Welcome</h2>
        <p className="description">
          This is the Next.js version of the React Learning Lab. The exercise list on the left
          is fetched on the server. Open the Movies page to see server-fetched movie data.
        </p>
        <div className="page-meta">
          <strong>Server-side:</strong> This page uses an async Server Component.{" "}
          <code>getExercises()</code> runs on the server before the page is sent to the client.
        </div>
      </section>
    </main>
  );
}
