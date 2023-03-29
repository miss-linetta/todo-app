import React, { useState } from "react";
import styles from "./TasksForm.module.scss";

const TasksForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  }

  return (
    <form className={styles["todo-form"]} onSubmit={handleFormSubmit}>
      <div className={styles["container"]}>
        <input
          className={styles["input"]}
          type="text"
          placeholder="Add a new task"
          onInput={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          autoFocus
          required
        />
        <button className={styles["button"]} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TasksForm;
