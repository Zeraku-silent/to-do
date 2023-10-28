import { TasksList } from "./List.styles";
import { Task } from "../Task";
import { Controller } from "../Controller";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

export const List = () => {
  const [tasks, setTasks] = useState([]);
  const [sort, setSort] = useState(true);
  const [filter, setFilter] = useState("all");
  const [filtredTasks, setFiltredTasks] = useState([]);

  useEffect(() => {
    const startStoradge = localStorage.getItem("tasks") || "[]";
    setTasks(JSON.parse(startStoradge));
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

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
    if (tasks.length === 1) {
      localStorage.setItem("tasks", "[]");
    }
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

  const Profile = () => {
    return (
      <>
        <Avatar
          size={100}
          person={{ name: "Katsuko Saruhasji", imageId: "YfeOqp2" }}
        />
        <Avatar
          person={{ name: "Lim Lanying", imageId: "1bx5QH6" }}
          size={100}
        />
        <Avatar
          person={{ name: "Alilu Lemma", imageId: "OKS67lh" }}
          size={80}
        />
      </>
    );
  };

  const Avatar = () => {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  };

  return (
    <div>
      <Controller addTodo={addTodo} />

      <TasksList>
        <select value={filter} onChange={changeFilter}>
          <option value="all">Все задачи</option>
          <option value="unsuccess">Только невыполненные</option>
          <option value="success">Только выполненные</option>
        </select>
        <button onClick={changeSort}>↓↑</button>

        {filtredTasks.map((item) => (
          <Task
            task={item}
            key={item.id}
            handleRemove={handleRemove}
            handleToggle={handleChange}
          />
        ))}
      </TasksList>

      <section>
        <h1> Amazing babulka-matematik</h1>
        <Profile />
      </section>
    </div>
  );
};
