import { useState } from "react";
import { Input } from "../../../Input/Input";
import { TasksList } from "./List.styles";
import { Task } from "./Task";

export const List = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Input />
      <TasksList>
        {tasks.map((item) => (
          <Task task={item} key={item.id} />
        ))}
      </TasksList>
    </div>
  );
};
