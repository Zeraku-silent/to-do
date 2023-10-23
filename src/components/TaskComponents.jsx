import {
  StyledTitle,
  TasksList,
  StyledCheckbox,
  TaskText,
} from "./TaskComponents.styles";
import { Controller } from "./Controller";
import { useEffect, useState } from "react";
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
      <button onClick={deliteTask}>Удалить</button>
    </TaskText>
  );
};

//Инпут

//Чексбокс

const Checkbox = ({ task, handleToggle }) => {
  const onClick = () => {
    handleToggle(task.id);
  };
  return (
    <StyledCheckbox
      value={task.checked}
      checked={task.checked}
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
    setFiltredTasks((prev) => {
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
  };
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const showFiltred = () => {
    setFiltredTasks(
      tasks.filter((task) => {
        if (filter === "success") {
          return task.checked;
        }
        if (filter === "unsuccess") {
          return !task.checked;
        }

        return tasks;
      })
    );
  };
  useEffect(() => {
    tasksSort();
  }, [sort, tasks]);

  useEffect(() => {
    showFiltred();
  }, [tasks, filter]);

  return (
    <div>
      <Controller addTodo={addTodo} />

      <TasksList>
        <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
        <button onClick={changeSort}>sort</button>

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

export { Title, Task, Checkbox, List };
