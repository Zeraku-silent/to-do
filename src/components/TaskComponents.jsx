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
  const [sort, setSort] = useState(true);
  const [filter, setFilter] = useState("all");
  const [filtredTasks, setFiltredTasks] = useState([]);

  const tasksSort = () => {
    setTasks((prev) => {
      const sorted = [...prev].sort((a, b) => {
        if (b.date > a.date) {
          return -1;
        }
      });
      return sort ? sorted : sorted.reverse();
    });
  };

  const addTodo = (text) => {
    const date = new Date().toLocaleString();
    const id = nanoid();
    const newTask = { id, text, checked: false, date };
    setTasks((prev) => [...prev, newTask]);
    tasksSort();
    showFiltred();
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

  const changeSort = () => {
    setSort((prev) => !prev);
    tasksSort();
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
    showFiltred();
  };

  const showFiltred = (filter) => {
    setFiltredTasks(
      tasks.filter((task) => {
        if (filter === "success") {
          return task.checked;
        }
        if (filter === "unsuccess") {
          return !task.checked;
        }
        return task;
      })
    );
  };

  return (
    <div>
      <Input addTodo={addTodo} />
      <button onClick={changeSort}>sort</button>

      <TasksList>
        <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
        {filtredTasks.map((item) => (
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
