const express = require('express');
const app = new express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const connectDB = require('./config/db');





const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`);
});