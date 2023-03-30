import { useState } from "react";
import styles from "./App.module.scss";
import TasksForm from "./components/tasks-form/TasksForm";
import TaskList from "./components/tasks-form/task-list/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <TasksForm addTask={addTask} />
        {tasks && tasks.length ? (
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        ) : (
          <p>No Tasks...</p>
        )}
      </div>
    </div>
  );
}

export default App;
