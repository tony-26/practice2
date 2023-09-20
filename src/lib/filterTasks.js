export default (tasks, filterStatus) => {
  if (filterStatus === "all") return tasks;
  const status = filterStatus === "completed" ? true : false;
  return tasks.filter((task) => status === task.completed);
};
