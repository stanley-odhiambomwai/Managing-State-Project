import React from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, setTaskToEdit }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.name}</span>: {task.description}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => setTaskToEdit(task)}>Edit</button>
      <button onClick={() => {
        if (window.confirm('Are you sure you want to delete this task?')) {
          deleteTask(task.id);
        }
      }}>Delete</button>
    </li>
  );
};

export default TaskItem;
