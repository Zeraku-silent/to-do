import { TaskText } from "./Task.styles";
import { useState } from "react";
import { StyledCheckbox } from "./Checkbox.styles";

export const Task = ({ task }) => {
  return (
    <div>
      <TaskText>{task.text}</TaskText>
    </div>
  );
};
