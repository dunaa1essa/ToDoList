const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    mehods:['GET','POST'],
    allowHeaders:'Content-Type,Authorization',
}

   app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
