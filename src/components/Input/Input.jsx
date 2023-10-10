import { StyledInput } from "./Input.styles";
import { useState } from "react";
import { Button } from "./Button";
import { InputWrapper } from "./InputWrapper";

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState(" ");

  const ClickSubmit = (e) => {
    if (value.trim()) {
      addTodo(StyledInput.value.trim());
      setValue("");
      console.log("1+");
    }
  };
  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
      ></StyledInput>
      <Button type="button" onClick={ClickSubmit}></Button>
    </InputWrapper>
  );
};
