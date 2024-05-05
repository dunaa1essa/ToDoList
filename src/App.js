import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteAllTasks={deleteAllTasks} />
    </div>
  );
};

export default App;