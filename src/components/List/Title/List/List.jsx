import { useState } from "react";
import { Input } from "../../../Input/Input";
import { TasksList } from "./List.styles";
import { Task } from "./Task";
import { nanoid } from "nanoid";
import { StyledCheckbox } from "./Checkbox.styles";
import { TaskWrapper } from "./TaskWrapper.styles";

export const List = () => {
  const [tasks, setTasks] = useState([]);
  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks((prev) => [...prev, newTask]);
  };

  // function handleClick(e) {
  //   if (e.target.checked) {
  //     console.log("asd");
  //   }
  // }

  // На текущий момент идея передать пропсами данные о таске в чекбокс и в чекбоксе сделать функцию по удалению

  return (
    <div>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <TaskWrapper>
            <Task task={item} key={item.id}></Task>
            {/* <StyledCheckbox
              type="checkbox"
              onClick={handleClick}
              key={item.chbid}
            ></StyledCheckbox> */}
          </TaskWrapper>
        ))}
      </TasksList>
    </div>
  );
};
