const express = require('express');
const app = new express();

const mongoose = require('mongoose');

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

require ('dotenv').config();
require('./db/data');
const PORT = process.env.PORT;









app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});