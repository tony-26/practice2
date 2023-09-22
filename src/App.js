import { useState } from "react";
import _ from "lodash";
import Heading from "./Components/Heading";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import initialTasks from "./initialStates/initialTasks";
import ColorFilter from "./Components/ColorFilter";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterColors, setFilterColors] = useState([]);
  return (
    <div>
      <Heading />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} filterStatus={filterStatus} />
      <button
        onClick={() => {
          setFilterStatus("all");
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          setFilterStatus("incomplete");
        }}
      >
        Incompleted
      </button>
      <button
        onClick={() => {
          setFilterStatus("completed");
        }}
      >
        completed
      </button>
      <div>
        <ColorFilter filterColor="black" />
        <ColorFilter filterColor="green" />
        <ColorFilter filterColor="blue" />
        <ColorFilter filterColor="red" />
        <ColorFilter filterColor="purple" />
      </div>
    </div>
  );
};

export default App;
