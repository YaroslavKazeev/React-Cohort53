import categories from "./fake-data/all-categories.js";
export default function Categories() {
  return (
    <div class="categories">
      {categories.map((category) => (
        <div class="categories--item">{category.replace("FAKE: ", "")}</div>
      ))}
    </div>
  );
}
