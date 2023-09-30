import { useState } from "react";
import _ from "lodash";
import Heading from "./Components/Heading";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import initialTasks from "./initialStates/initialTasks";
import ColorFilter from "./Components/ColorFilter";
import StatusFilters from "./Components/StatusFilters";
import ColorFilterList from "./Components/ColorFilterList";

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
      <StatusFilters setFilterStatus={setFilterStatus} />
      <ColorFilterList
        setFilterColors={setFilterColors}
        filterColors={filterColors}
      />
    </div>
  );
};

export default App;
