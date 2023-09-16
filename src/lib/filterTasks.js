const filterTasks = (tasks, filterStatus) => {
  if (filterStatus === "all") return tasks;
  const result = tasks.filter((task) => {
    return (
      (filterStatus === "incomplete" && !task.completed) ||
      (filterStatus === "completed" && task.completed)
    );
  });
  return result;
};
export default filterTasks;
