import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      //calling server to access this api data
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
      //   console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //useEffect will be triggered at mounting time or can be triggered at unmount time if return
  //statement is placed
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
