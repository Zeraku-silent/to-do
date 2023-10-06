import { TaskText } from "./Task.styles";

export const Task = ({ task }) => {
  return (
    <div>
      <TaskText>{task.text}</TaskText>
    </div>
  );
};
