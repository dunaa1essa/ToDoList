import axios from 'axios';
import React, { useEffect, useState } from 'react';
const cors = require('cors');





const Login = () => {

// show user
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const showUser = async  ()=>{
        try{
            const res = await axios.get ('https://dummyapi.online/api/users');
            
            setUser(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    showUser();
  },[])

    //add user
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    // app.use(cors(corsOptions));
    try {
      const addNewUser = { name, email, username };
      const res = await axios.post('https://dummyapi.online/api/users', addNewUser,{
        headers: {
            'Accept': 'application/json'
          }
      });
      console.log('New user added:', res.data);
      setName('');
      setEmail('');
      setUsername('');
      console.log(addNewUser)
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div>
        {/* add user */}
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder=' name'/>
        </div>
        <div>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' email'/>
        </div>
        <div>
          <input type='password' value={username} onChange={(e) => setUsername(e.target.value)} placeholder=' password'/>
        </div>
        <button type='submit'>Add User</button>
      </form>
      {/* show user */}
      <div>
        <h1>Users List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
        {user.map((userData, index) => ( 
          <tr key={index}>
            <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>{userData.username}</td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;
