function FilterPrice({maxPrice, setMaxPrice}) {
  function updatePrice(e) {
    setMaxPrice(+e.target.value);
  }
  return (
    <fieldset>
      <legend>Price</legend>
        <label htmlFor="max-price">
          Max price
          <input
            type="range"
            id="max-price"
            in="0.5"
            max="9"
            step="0.25"
            value={maxPrice}
            onChange={updatePrice}
          />
        </label>
      </fieldset>
  );
}

export default FilterPrice;