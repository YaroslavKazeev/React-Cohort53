export default function Categories({
  categories,
  selectedCategory,
  setCategory,
}) {
  if (categories) {
    return (
      <div className="categories">
        {categories.map((category) => {
          category = category.replace("FAKE: ", "");
          return (
            <div
              className={`categories--item ${
                selectedCategory === category ? "categories--item-selected" : ""
              }`}
              onClick={(e) => setCategory(e.target.textContent)}
            >
              {category}
            </div>
          );
        })}
      </div>
    );
  }
}
