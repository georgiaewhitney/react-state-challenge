import FilterCategory from "./FilterCategory.jsx";
import FilterPrice from "./FilterPrice.jsx";
import ListDishes from "./ListDishes.jsx";
import { useState } from "react";

// Get all unique categories from the array of dishes


function App() {
  const [maxPrice, setMaxPrice] = useState(9);
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
            <FilterCategory />
          </form>
        </div>
      </section>
      <section aria-label="dishes">
        <ListDishes maxPrice={maxPrice}/>
      </section>
      
    </main>
  );
}

export default App;
