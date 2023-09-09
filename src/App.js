import { useState } from "react";
import _ from "lodash";
import Heading from "./Components/Heading";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import initialTasks from "./initialStates/initialTasks";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filterStatus, setFilterStatus] = useState("all");
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
    </div>
  );
};

export default App;
