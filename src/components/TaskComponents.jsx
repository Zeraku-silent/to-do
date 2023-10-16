import {
  StyledTitle,
  TasksList,
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

const Task = ({ task, handleToggle, handleRemove }) => {
  const deliteTask = () => {
    handleRemove(task.id);
  };
  return (
    <TaskText checked={task.checked}>
      {task.text}
      <Checkbox task={task} handleToggle={handleToggle}></Checkbox>
      <span>{task.date}</span> <br></br>
      <button onClick={deliteTask}>Удалить в пизду</button>
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

const Checkbox = ({ task, handleToggle }) => {
  const onClick = () => {
    handleToggle(task.id);
  };
  return (
    <StyledCheckbox
      value={task.checked}
      type="checkbox"
      onChange={onClick}
    ></StyledCheckbox>
  );
};

//Лист с тасками

const List = () => {
  const [tasks, setTasks] = useState([]);
  const addTodo = (text) => {
    const date = new Date().toLocaleString();
    const id = nanoid();
    const newTask = { id, text, checked: false, date };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleRemove = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleChange = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id !== id ? task : { ...task, checked: !task.checked }
      )
    );
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <TasksList>
        {tasks.map((item) => (
          <Task
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          />
        ))}
      </TasksList>
    </div>
  );
};

export { Title, Task, Input, Button, Checkbox, List };
