import React, { Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="containter">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
