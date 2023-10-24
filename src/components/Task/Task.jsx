import { TaskText } from "./Task.styles";
import { Checkbox } from "../Checkbox";

export const Task = ({ task, handleToggle, handleRemove }) => {
  const deliteTask = () => {
    handleRemove(task.id);
  };
  return (
    <TaskText checked={task.checked}>
      {task.text}
      <Checkbox task={task} handleToggle={handleToggle}></Checkbox>
      <span>{task.date}</span> <br></br>
      <button onClick={deliteTask}>Удалить</button>
    </TaskText>
  );
};
