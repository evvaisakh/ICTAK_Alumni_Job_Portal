const express = require('express');
const app = express();
const authRoute = require('./routes/authentication');

require ('dotenv').config();
const PORT = process.env.PORT;

app.use('/api/auth',authRoute);







app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});