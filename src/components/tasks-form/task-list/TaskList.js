import TaskItem from "./task-item/TaskItem";
import styles from './TaskList.module.scss';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className={styles['container']}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
    </div>
  );
};

export default TaskList;
