import dishes from "./data.js";

const categories = [...new Set(dishes.map((dish) => dish.category))];

function FilterCategory() {
  return (
    <fieldset>
      <legend>Category</legend>
      <label htmlFor="all">
        <input type="radio" name="categories" id="all" value="all" />
                all
      </label>
      {categories.map((c) => (
      <label htmlFor={c} key={c}>
        <input type="radio" name="categories" id={c} value={c} />
                  {c}
                </label>
              ))}
            </fieldset>
  );
}

export default FilterCategory;