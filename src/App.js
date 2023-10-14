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
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterColors, setFilterColors] = useState(false);

  useEffect(() => {
    onValue(ref(database, "/todos"), (snapShot) => {
      setTasks(snapShot.val());
    });

    onValue(ref(database, "/filterStatus"), (snapShot) => {
      setFilterStatus(snapShot.val());
    });

    onValue(ref(database, "/filterColors"), (snapShot) => {
      const firebaseFilterColors =
        snapShot.val() === null ? [] : snapShot.val();
      setFilterColors(firebaseFilterColors);
    });
  }, []);

  return tasks === false || filterStatus === false || filterColors === false ? (
    <h2>LOADING</h2>
  ) : (
    <div className="App">
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
