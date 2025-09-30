export default function Categories({
  categories,
  selectedCategory,
  setCategory,
}) {
  let output = <div>Loading categories...</div>;
  !categories
    ? output
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
