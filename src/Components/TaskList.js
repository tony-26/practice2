import _ from "lodash";
import TaskItem from "./TaskItem";
import filterTasks from "../lib/filterTasks";

const TaskList = ({ tasks, setTasks, filterStatus }) => {
  const filteredTasks = filterTasks(tasks, filterStatus);
  return (
    <div>
      {filteredTasks.map((task, i) => (
        <TaskItem task={task} i={i} tasks={tasks} setTasks={setTasks} key={i} />
      ))}
    </div>
  );
};
export default TaskList;
