import filterTasks from "./filterTasks";

const filterTasksV2 = (tasks, filterStatus, filterColors) =>
  filterTasks(tasks, filterStatus).filter(
    (task) => filterColors.includes(task.color) || filterColors.length === 0
  );

export default filterTasksV2;
