import { useEffect, useState } from "react";

function BackendFoodMenu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/rest/foods"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch food menu");
        }

        const data = await response.json();

        setFoods(data.foods);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return <h3>Loading food menu...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Food Menu From MongoDB</h2>

      {foods.length === 0 ? (
        <p>No food available.</p>
      ) : (
        foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h3>{food.name}</h3>

            <p>Category: {food.category}</p>

            <p>Price: ₹{food.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BackendFoodMenu;