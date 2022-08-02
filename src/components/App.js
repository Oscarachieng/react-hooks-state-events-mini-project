import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";


function App() {
  /*
1. initialize state for the task in the Common parent.
2. pass down the task as props to the needing components.
3.  
*/

  const [tasks, setTasks] = useState(TASKS);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("code");
  // const [selected, setSelected] = useState(false)
  // function to handle task delete
  const handleTaskDeleteClick = (text) => {
    const onTaskDelete = tasks.filter((task) => task.text !== text);
    setTasks(onTaskDelete);
  };

  // function to handle category click

  const handleCategoryClick = (category) => {
    setTasks(TASKS);
    const onCategoryClick = tasks.filter((task) => {
      if (category === "All") return true;
      return task.category === category;
    });
    setTasks(onCategoryClick);
  };

  //function to handle isubmit event.
  const handleSubmit = (newTask) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        searchText={searchText}
        setSearchText={setSearchText}
        selected={selected}
        setSelected={setSelected}
        onTaskFormSubmit={handleSubmit}
      />
      <TaskList tasks={tasks} handleTaskDeleteClick={handleTaskDeleteClick} />
    </div>
  );
}

export default App;
