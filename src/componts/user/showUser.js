import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './login.css'

const TableComponent = ({ data }) => {

    
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
  
  return (
    <div>
    <div className='table'>
      <h1>Users List</h1>
      <table>
        <thead className='user-list-title'>
          <tr>
             
            <th>photo</th>
            <th>F-Name</th>
            <th>L-Name</th>
            <th>Email</th>
           
          </tr>
        </thead>
        <tbody className='user-list-value'>
      {user.map((userData, index) => (
          <tr key={index}>
              <img src={userData.avatar} alt={`User ${userData.id}`} style={{ borderRadius: '50%' }}/>
              <td>{userData.first_name}</td>
              <td>{userData.last_name}</td>
              <td>{userData.email}</td>
               </tr>
      ))}
           {data.map((item, index) => (
            <tr key={index}>
              <img src={item.photo} alt={`${item.last_name}'s photo`} width="100"/>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default TableComponent;