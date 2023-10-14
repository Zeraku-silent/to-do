import {
  StyledTitle,
  TasksList,
  TaskWrapper,
  StyledCheckbox,
  StyledButton,
  InputWrapper,
  StyledInput,
  TaskText,
} from "./TaskComponents.styles";
import { useState } from "react";
import { nanoid } from "nanoid";

//Титульник

const Title = () => {
  return <StyledTitle>Список делов</StyledTitle>;
};

//Таска

const Task = ({ task, handleToggle }) => {
  return (
    <TaskText>
      {task.text}
      <Checkbox task={task} handleToggle={handleToggle}></Checkbox>
    </TaskText>
  );
};

//Инпут

const Input = ({ addTodo }) => {
  const [value, setValue] = useState(" ");

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  const buttonClick = () => {
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
      ></StyledInput>
      <StyledButton type="button" onClick={buttonClick}>
        ADD
      </StyledButton>
    </InputWrapper>
  );
};

//Кнопка

const Button = () => {
  return <StyledButton></StyledButton>;
};

//Чексбокс

const Checkbox = ({ handleToggle }) => {
  // const [value, setValue] = useState(task.text);

  // function handleClick(e) {
  //   if (e.target.checked) {
  //     console.log(value);
  //   }
  // }
  return (
    <StyledCheckbox type="checkbox" onClick={handleToggle}></StyledCheckbox>
  );
};

//Лист с тасками

const List = () => {
  const [tasks, setTasks] = useState([]);
  const addTodo = (text) => {
    const id = nanoid();
    const newTask = { id, text };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleChange = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? task : { ...task, checked: !task.checked }
      )
    );
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <TaskWrapper>
            <Task task={item} key={item.id} handleToggle={handleChange}></Task>
          </TaskWrapper>
        ))}
      </TasksList>
    </div>
  );
};

export { Title, Task, Input, Button, Checkbox, List };
