import _ from "lodash";
import { useState } from "react";
import { set, ref } from "firebase/database";
import { database } from "../firebase";

const AddTask = ({ setTasks, tasks }) => {
  const [userInput, setUserInput] = useState("");
  const addTaskHandler = () => {
    const copyTasks = _.cloneDeep(tasks);
    copyTasks.push({
      text: userInput,
      color: "black",
      completed: false,
    });
    setTasks(copyTasks);
    set(ref(database, "/todos"), copyTasks);
    setUserInput("");
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></input>

      <button onClick={addTaskHandler}>Add Task</button>
      
    </div>
  );
};
export default AddTask;
