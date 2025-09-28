import categories from "./fake-data/all-categories.js";

export default function Categories({ selectedCategory, setCategory }) {
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
