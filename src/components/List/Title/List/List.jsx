import { useState } from "react";
import { Input } from "../../../Input/Input";
import { TasksList } from "./List.styles";
import { Task } from "./Task";
import { nanoid } from "nanoid";

export const List = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </div>
  );
};
