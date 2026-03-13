function Card({ title, children }) {
  const slug = title
    ? title.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "").toLowerCase()
    : "";
  const headingId = slug || undefined;
  return (
    <section className="card" aria-labelledby={headingId || undefined}>
      {title && <h3 id={headingId}>{title}</h3>}
      {children}
    </section>
  );
}

export default Card;

