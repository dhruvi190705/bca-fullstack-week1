import FoodMenu from "../components/FoodMenu";
import BackendFoodMenu from "../components/BackendFoodMenu";
import Orders from "../components/Orders";

function Home() {
  return (
    <div>
      {/* QuickBite Header */}
      <h1 style={{ textAlign: "center" }}>
        🍔 Welcome to QuickBite
      </h1>

      {/* Food Ordering */}
      <FoodMenu />

      {/* Food From MongoDB */}
      <BackendFoodMenu />

      {/* Customer Orders From MongoDB */}
      <Orders />
    </div>
  );
}

export default Home;