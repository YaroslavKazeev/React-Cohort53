import categories from "./fake-data/all-categories.js";

export default function Categories({ selectedCategory, changeCategory }) {
  return (
    <div className="categories">
      {categories.map((category) => {
        category = category.replace("FAKE: ", "");
        return (
          <div
            className={`categories--item ${
              selectedCategory === category ? "categories--item-selected" : ""
            }`}
            onClick={(e) => changeCategory(e.target.textContent)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}
