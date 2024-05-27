import axios from 'axios';
import React, { useEffect, useState } from 'react';





const Login = () => {

// show user
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const showUser = async  ()=>{
        try{
            const res = await axios.get ('https://reqres.in/api/users?total=20');

            setUser(res.data.data);
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
      const res = await axios.post('https://reqres.in/api/users', addNewUser,{
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>photo</th>
            </tr>
          </thead>
          <tbody>
        {user.map((userData, index) => (
            <tr key={index}>
                <td>{userData.id}</td>
                <td>{userData.first_name}</td>
                <td>{userData.last_name}</td>
                <td>{userData.email}</td>
                <img src={userData.avatar} alt={`User ${userData.id}`} style={{ borderRadius: '50%' }}/> </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;
