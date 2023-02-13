import dishes from "./data.js";
import FilterCategory from "./FilterCategory.jsx";
import FilterPrice from "./FilterPrice.jsx";
import ListDishes from "./ListDishes.jsx";

// Get all unique categories from the array of dishes


function App() {
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice />
            <FilterCategory />
          </form>
        </div>
      </section>
      <ListDishes />
      
    </main>
  );
}

export default App;
