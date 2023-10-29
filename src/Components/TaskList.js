import _ from "lodash";
import TaskItem from "./TaskItem";
import filterTasksV2 from "../lib/filterTasksV2";

const TaskList = ({ tasks, setTasks, filterStatus, filterColors }) => {
  const filteredTasks = filterTasksV2(tasks, filterStatus, filterColors);
  return (
    <div className="box">
      {filteredTasks.map((task, i) => (
        <TaskItem task={task} i={i} tasks={tasks} setTasks={setTasks} key={i} />
      ))}
    </div>
  );
};
export default TaskList;
