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

  const result = filteredByStatus.filter((task) => {
    if (filterColors[0] === task.color) {
      return true;
    } else {
      return false;
    }
  });

  return result;
};
export default filterTasksV2;
