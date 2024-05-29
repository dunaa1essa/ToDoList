import React, { useState } from 'react';
// import TaskForm from './componts/TaskForm';
// import TaskList from './componts/TaskList';
// import axios from 'axios';
import ShowUser from './componts/user/showUser';
import AddUser from './componts/user/addUser';
// import Login from './componts/user/login';



const App = () => {

  const [data, setData] = useState([]);

  const handleDataSubmit = (newData) => {
    setData([...data, newData]);
  };


  // const [tasks, setTasks] = useState([]);

  // const addTask = (taskText) => {
  //   setTasks([...tasks, taskText]);
  // };

  // const deleteAllTasks = () => {
  //   setTasks([]);
  // };

  return (
    <div>
      {/* <h1>To Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteAllTasks={deleteAllTasks} /> */}
     {/* <Login/> */}
     <AddUser onDataSubmit={handleDataSubmit}/>
      <ShowUser data={data}/>
   

    </div>
  );
};

export default App;