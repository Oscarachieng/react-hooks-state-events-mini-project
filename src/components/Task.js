import React from "react";

function Task({task, handleTaskDeleteClick}) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE : {task.category}</div>
      <div className="text">TEXT HERE : {task.text}</div>
      <button className="delete" onClick={(() =>handleTaskDeleteClick(task.text))}>X</button>
    </div>
  );
}

export default Task;
