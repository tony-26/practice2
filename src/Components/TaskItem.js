import _ from "lodash";
import { ref, set } from "firebase/database";
import { database } from "../firebase";

const TaskItem = ({ setTasks, tasks, i, task }) => {
  const completedToggle = (i) => {
    return () => {
      const copy = _.cloneDeep(tasks);
      copy[i].completed = !copy[i].completed;
      setTasks(copy);
      set(ref(database, "/todos"), copy);
    };
  };
  return (
    <div style={{ color: task.color }} key={i}>
      <button
        onClick={() => {
          const copy = _.cloneDeep(tasks);
          const newTask = copy.slice(0, i).concat(copy.slice(i + 1));
          setTasks(newTask);
          set(ref(database, "/todos"), newTask);
        }}
      >
        -
      </button>
      {task.text}
      <input
        onChange={completedToggle(i)}
        checked={task.completed}
        type="checkbox"
      />
      <select
        onChange={(e) => {
          const copy = _.cloneDeep(tasks);
          copy[i].color = e.target.value;
          setTasks(copy);
          set(ref(database, "/todos"), copy);
        }}
      >
        <option value={""}></option>
        <option value={"black"}>black</option>
        <option value={"blue"}>blue</option>
        <option value={"green"}>green</option>
        <option value={"red"}>red</option>
      </select>
    </div>
  );
};
export default TaskItem;
