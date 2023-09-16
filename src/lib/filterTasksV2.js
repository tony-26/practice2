const filterTasksV2 = (tasks, filterStatus, filterColors) => {
  const filteredByStatus = tasks.filter((task) => {
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

  return filteredByStatus.filter(
    (task) => filterColors.includes(task.color) || filterColors.length === 0
  );
};
export default filterTasksV2;
