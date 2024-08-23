import { useState } from "react";
import { SearchInput, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>GifExpertApp</h1>

      <SearchInput
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />

      {/* <ol className="lista">
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
