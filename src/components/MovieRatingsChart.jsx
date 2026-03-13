import { memo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function MovieRatingsChart({ movies }) {
  return (
    <section className="movie-chart">
      <h3>Movie ratings chart</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={movies} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
          <XAxis dataKey="title" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 10]} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="rating" fill="#60a5fa" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default memo(MovieRatingsChart);

