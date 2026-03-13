import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(
    async (response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      // Artificial delay so the loading state is visible
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return response.json();
    }
  );
}

function PostsFetcher() {
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <section className="playground">
      <h3>Example solution for exercise 9</h3>
      <p>
        This component fetches posts from a public API using{" "}
        <code>useQuery</code> from React Query and shows loading and error
        states.
      </p>

      {(isLoading || isFetching) && (
        <p className="loading-row">
          <span className="cog-spinner" aria-hidden="true" />
          <span>Loading posts...</span>
        </p>
      )}
      {isError && (
        <p className="field-error">Error: {error?.message || "Unknown error"}</p>
      )}

      <button type="button" className="exercise-button" onClick={() => refetch()}>
        Refetch posts
      </button>

      {!isLoading && !isError && (
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

