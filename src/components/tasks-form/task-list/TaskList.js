import TaskItem from "./task-item/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
    </>
  );
};

export default TaskList;
