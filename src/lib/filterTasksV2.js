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
    if (filterColors.length > 1) {
      for (let i = 0; i < filterColors.length; i++) {
        console.log(filterColors[i], task.color);
        if (filterColors[i] === task.color) {
          return true;
        } else {
        }
      }
    }
    // i=0 => filterColors[i]="green"
    // if (filterColors.length === 1) {
    //   if (filterColors[0] === task.color) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  });
  console.log({ result });
  return result;
};
export default filterTasksV2;
