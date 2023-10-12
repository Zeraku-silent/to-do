import { useState } from "react";
import { Input } from "../../../Input/Input";
import { TasksList } from "./List.styles";
import { Task } from "./Task";
import { nanoid, random } from "nanoid";
import { StyledCheckbox } from "./Checkbox.styles";
import { TaskWrapper } from "./TaskWrapper.styles";

export const List = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("unchecked");
  const addTodo = (text) => {
    const id = nanoid();
    const chbid = nanoid();
    const newTask = { id, text, chbid };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <TaskWrapper>
            <Task task={item} key={item.id}></Task>
            <StyledCheckbox key={item.chbid} type="checkbox"></StyledCheckbox>
          </TaskWrapper>
        ))}
      </TasksList>
    </div>
  );
};
