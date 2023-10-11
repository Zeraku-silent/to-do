import { StyledInput } from "./Input.styles";
import { useState } from "react";
import { InputWrapper } from "./InputWrapper";
import { StyledButton } from "./Button.stules";

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState(" ");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  const buttonClick = () => {
    if (value.trim()) {
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
      <StyledButton type="button" onClick={buttonClick}>
        ADD
      </StyledButton>
    </InputWrapper>
  );
};
