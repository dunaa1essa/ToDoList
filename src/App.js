import React from 'react';
// import TaskForm from './componts/TaskForm';
// import TaskList from './componts/TaskList';
import Login from './componts/login/login';
import axios from 'axios';



const App = () => {

  const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }


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
        <header className="App-header">

<button onClick={apiCall}>Make API Call</button>

</header>
      <Login/>
   

    </div>
  );
};

export default App;