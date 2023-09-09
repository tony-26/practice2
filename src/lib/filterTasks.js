const filterTasks = (tasks, filterStatus) => {
  const result = tasks.filter((task) => {
    if (filterStatus === "incomplete") {
      return task.completed === false;
    }
    if (filterStatus === "completed") {
      return task.completed === true;
    }
    if (filterStatus === "all") {
      return true;
    }
  });
  return result;
};
export default filterTasks;
