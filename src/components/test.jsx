const changeFilter = (e) => {
  setFilter(e.target.value);
  showFiltred();
};

const showFiltred = () => {
  setFiltredTasks(
    tasks.filter((task) => {
      if (filter == "success") {
        return task.checked;
      }
      if (filter == "unsuccess") {
        return !task.checked;
      }
      return task;
    })
  );
};
