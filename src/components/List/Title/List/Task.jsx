import { TaskText } from "./Task.styles";
import { Checkbox } from "./Checkbox";

export const Task = ({ task }) => {
  return (
    <div>
      <TaskText>
        {task.text}
        <Checkbox></Checkbox>
      </TaskText>
    </div>
  );
};
