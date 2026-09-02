function Card({ title = "No Title", description = "No Description" }) {
  return (
    <div style={{ border: "1px solid gray", borderRadius: "8px", padding: "15px", margin: "10px", width: "200px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;