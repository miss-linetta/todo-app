import React from 'react';
import { useState } from 'react';
import styles from './TaskItem.module.scss';
import { TrashIcon } from './components/TrashIcon';

const TaskItem = ({ task, deleteTask }) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
    }

  return (
    
        <div className={styles['container']}>
            <input 
                className={styles['checkbox']} 
                type="checkbox" 
                name={task.name}
                id={task.id}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label 
                className={styles['task-text']} 
                checked={task.checked} 
                name={task.name}
                id={task.id}
            >{task.name}</label>
            <button 
                className={styles['delete']} 
                onClick={deleteTask}
            >
                <TrashIcon />
            </button>
        </div>
    
  )
}

export default TaskItem