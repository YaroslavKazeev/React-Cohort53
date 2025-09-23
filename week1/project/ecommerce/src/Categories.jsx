import categories from "./fake-data/all-categories.js";
export default function Categories({ changeCategory }) {
  return (
    <div class="categories">
      {categories.map((category) => (
        <div
          class="categories--item"
          onClick={(e) => {
            console.log(e.target.textContent);
            return changeCategory(e.target.textContent);
          }}
        >
          {(category = category.replace("FAKE: ", ""))}
        </div>
      ))}
    </div>
  );
}
