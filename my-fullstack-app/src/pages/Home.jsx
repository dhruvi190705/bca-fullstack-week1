import UserList from "../components/UserList";
import FoodMenu from "../components/FoodMenu";

function Home() {
  return (
    <div>
      <h1>Welcome to QuickBite</h1>

      <UserList />
      <FoodMenu />
    </div>
  );
}

export default Home;