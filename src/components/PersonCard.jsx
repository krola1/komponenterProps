export default function PersonCard({ name, age, genre, id, favoriteGear }) {
  return (
    <div style={{ border: "solid white" }}>
      <p>id:{id}</p>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Genere: {genre}</p>
      <p>Favorite gear: {favoriteGear}</p>
    </div>
  );
}
