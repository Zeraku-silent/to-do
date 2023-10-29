import { TaskText } from "./Task.styles";
import { Checkbox } from "../Checkbox";
import { useState } from "react";

export const Task = ({ task, handleToggle, handleRemove, editingTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const handleChange = (e) => {
    if (e.code === "Enter") {
      setIsEditing(false);
      editingTask(task.id, taskText);
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const deliteTask = () => {
    handleRemove(task.id);
  };
  return (
    <TaskText checked={task.checked}>
      {isEditing ? (
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleChange}
        />
      ) : (
        task.text
      )}
      <Checkbox task={task} handleToggle={handleToggle}></Checkbox>
      <span>{task.date}</span> <br></br>
      <button onClick={deliteTask}>Удалить</button>
      <button onClick={toggleEditing}>Редактировать</button>
    </TaskText>
  );
};
