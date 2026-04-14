const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

//rest object
const app = express();

//configuration
dotenv.config();

//DB connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/v1/test',require('./routes/userRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'))

app.get('/',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,'/view/index.html'));
})

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Express server is running on port ${PORT}`);
})