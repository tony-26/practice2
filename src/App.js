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
      <TaskList
        setTasks={setTasks}
        tasks={tasks}
        filterStatus={filterStatus}
        filterColors={filterColors}
      />
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
        {["black", "green", "red", "purple", "blue"].map((e, i) => {
          return (
            <ColorFilter
              key={i}
              filterColor={e}
              filterColors={filterColors}
              setFilterColors={setFilterColors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
