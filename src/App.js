import Header from "./Components/Header/Header";
import AvailableMeals from "./Components/meals/AvailableMeals";
import MealsSummery from "./Components/MealsSummary/MealsSummary";
import Modal from "./Components/Modal/Modal";
function App() {
  return (
    <>
      <Header />
      <MealsSummery />
      <AvailableMeals />
      <Modal />
    </>
  );
}

export default App;
