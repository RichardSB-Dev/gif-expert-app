import { useState } from "react";
import "../Styles/Components_styles.css";

export const SearchInput = ({ onNewCategory }) => {
  const [valueInput, setvalueInput] = useState("");

  const onInputChange = ({ target }) => {
    setvalueInput(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (valueInput.trim().length <= 1) return;
    // setCategories((cat) => [valueInput, ...cat]);
    onNewCategory(valueInput.trim());
    setvalueInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar categoria"
        value={valueInput}
        onChange={onInputChange}
      />
    </form>
  );
};
