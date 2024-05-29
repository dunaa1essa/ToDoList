import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const FormComponent = ({ onDataSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    photo:null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/users', formData);
      onDataSubmit(res.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
              <div className='log-in'>
       
       <form className='log-in-container' onSubmit={handleSubmit}>
          <h1>Add New User</h1>
         <div className='log-in-input'>
           <input type='text' name='first_name' value={formData.first_name} onChange={handleChange} placeholder=' First name'/>
         </div>
         <div className='log-in-input'>
           <input type='text' name='last_name' value={formData.last_name} onChange={handleChange} placeholder=' Last name'/>
         </div>
         <div className='log-in-input'>
           <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder=' email'/>
         </div>
         <div className='log-in-input'>
           <input type='file' name='photo'value={formData.photo} onChange={handleChange} placeholder=' add your photo'/>
         </div>
         <button type='submit'>Add User</button>
       </form>
         </div>
    </div>
  );
};

export default FormComponent;