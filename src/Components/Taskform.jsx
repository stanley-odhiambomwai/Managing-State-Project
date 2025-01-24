import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, taskToEdit, editTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Both fields are required!');
      return;
    }
    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    if (taskToEdit) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
