// TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteAllTasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
      <button onClick={deleteAllTasks}>clear all</button>
    </div>
  );
};

export default TaskList;
