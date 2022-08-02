import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleTaskDeleteClick }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => <Task task={task} key={task.text} handleTaskDeleteClick={handleTaskDeleteClick} />)}
    </div>
  );
}

export default TaskList;
