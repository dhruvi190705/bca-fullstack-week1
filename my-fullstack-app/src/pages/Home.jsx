import FoodMenu from "../components/FoodMenu";
import BackendFoodMenu from "../components/BackendFoodMenu";
import OrderTest from "../components/OrderTest";

function Home() {
  return (
    <div>
      <h1>Welcome to QuickBite</h1>

      <FoodMenu />
      <BackendFoodMenu />
      <OrderTest />
    </div>
  );
}

export default Home;