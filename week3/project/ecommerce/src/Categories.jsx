export default function Categories({
  categories,
  selectedCategory,
  setCategory,
}) {
  let output = <div>Error loading categories. Please try again later.</div>;
  categories === "error"
    ? output
    : !categories
    ? (output = <div>Loading categories...</div>)
    : (output = (
        <div className="categories">
          {categories.map((category) => (
            <div
              className={`categories--item ${
                selectedCategory === category ? "categories--item-selected" : ""
              }`}
              onClick={(e) => setCategory(e.target.textContent)}
            >
              {category}
            </div>
          ))}
        </div>
      ));
  return output;
}
