import { StyledInput } from "./Input.styles";
import { useState } from "react";

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
    }
  };
  return (
    <div>
      <StyledInput
        type="text"
        value={{ value }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
      ></StyledInput>
    </div>
  );
};
