import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { onValue, ref, set } from "firebase/database";
import { database } from "./firebase";

const TestDatabase = () => {
  const writeTestHandler = () => {
    // set(ref(database, "/todos"), initialTasks);
  };
  const readTestHandler = () => {
    const refUrl = ref(database, "/todos");
    onValue(refUrl, (snapShot) => {
      console.log(snapShot.val());
    });
  };
  return (
    <div>
      <button onClick={writeTestHandler}>write test</button>
      <button onClick={readTestHandler}>read test</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
