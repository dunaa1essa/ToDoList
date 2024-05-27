import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    mehods:['GET','POST'],
    allowHeaders:'Content-Type,Authorization',
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


