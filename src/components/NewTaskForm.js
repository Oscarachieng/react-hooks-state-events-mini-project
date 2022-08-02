import React from "react";

function NewTaskForm(props) {
  const {
    categories,
    searchText,
    setSearchText,
    selected,
    setSelected,
    onTaskFormSubmit,
  } = props;

  const taskFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: searchText,
      category: selected,
    };
    onTaskFormSubmit(newTask);
    setSearchText("");
    setSelected("code");
  };
  return (
    <form className="new-task-form" onSubmit={taskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </label>
      <label>
        Category
        <select name="category">
          {categories
            .filter((category) => category !== "All")
            .map((filteredCategory) => {
              return (
                <option
                  key={filteredCategory}
                  onChange={(e) => setSelected(e.target.value)}
                  value={selected}
                >
                  {filteredCategory}
                </option>
              );
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
