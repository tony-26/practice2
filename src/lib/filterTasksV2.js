import filterTasks from "./filterTasks";

const filterTasksV2 = (tasks, filterStatus, filterColors) => {
  return filterTasks(tasks, filterStatus).filter(
    (task) => filterColors.includes(task.color) || filterColors.length === 0
  );
};
export default filterTasksV2;
