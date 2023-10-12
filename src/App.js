import { useEffect, useState } from "react";
import _ from "lodash";
import Heading from "./Components/Heading";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import StatusFilters from "./Components/StatusFilters";
import ColorFilterList from "./Components/ColorFilterList";
import "./App.css";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

const App = () => {
  const [tasks, setTasks] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterColors, setFilterColors] = useState([]);
  useEffect(() => {
    const refUrl = ref(database, "/todos");
    onValue(refUrl, (snapShot) => {
      setTasks(snapShot.val());
    });
  }, []);
  return (
    <div className="App">
      <Heading />
      <AddTask setTasks={setTasks} tasks={tasks} />
      {tasks === false ? (
        <h2>LOADING</h2>
      ) : (
        <TaskList
          setTasks={setTasks}
          tasks={tasks}
          filterStatus={filterStatus}
          filterColors={filterColors}
        />
      )}

      <StatusFilters setFilterStatus={setFilterStatus} />
      <ColorFilterList setFilterColors={setFilterColors} />
    </div>
  );
};

export default App;
