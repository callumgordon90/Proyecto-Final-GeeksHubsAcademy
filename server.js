const express = require ('express');
const bodyParser = require ('body-parser');
const userRoutes = require ('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
const dbconnect = require('./config/db');
const app = express(); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/api/user', userRoutes);

//functionto connect to database:
dbconnect();

// server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})