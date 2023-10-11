import { TaskText } from "./Task.styles";

export const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox"></input>
      <TaskText>{task.text}</TaskText>
    </div>
  );
};
