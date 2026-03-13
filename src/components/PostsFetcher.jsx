import { useEffect, useState } from "react";

function PostsFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      setLoading(true);
      setError("");

      try {
        // Artificial delay so the loading state is visible
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setPosts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load posts.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="playground">
      <h3>Example solution for exercise 9</h3>
      <p>
        This component fetches posts from a public API using{" "}
        <code>useEffect</code> and shows loading and error states.
      </p>

      {loading && (
        <p className="loading-row">
          <span className="cog-spinner" aria-hidden="true" />
          <span>Loading posts...</span>
        </p>
      )}
      {error && <p className="field-error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-list-item">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostsFetcher;

