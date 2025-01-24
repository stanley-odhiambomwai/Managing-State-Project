import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { loadTasks, saveTasks } from '../Utils/Storage.jsx';

import TaskForm from './Taskform.jsx';


const TaskList = () => {
  const [tasks, setTasks] = useState(loadTasks());
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const editTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? task : t
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} editTask={editTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setTaskToEdit={setTaskToEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
