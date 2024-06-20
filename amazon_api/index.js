const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const port = 8585;
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(cors());
app.use(express.json());
app.use('/users',require('./routes/userroutes'));

// app.use('/users',require('./controllers/userscontroller'));
app.listen(port,(error)=>{
console.log(`server has started at ${port}`)
})
