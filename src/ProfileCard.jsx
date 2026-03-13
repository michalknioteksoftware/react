function ProfileCard({ name, bio }) {
  return (
    <section className="profile-card">
      <h3>{name}</h3>
      <p>{bio}</p>
    </section>
  );
}

export default ProfileCard;

