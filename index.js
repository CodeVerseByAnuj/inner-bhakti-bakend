require('dotenv').config();
const express = require('express');
const { connectDB, client } = require('./db');
 

const app = express();
const userRouter = require('./Router/userRouter');

app.use(express.json());

// Listen method
app.listen(3000, () => {
    console.log("Hello from listen method");
});

// Connect to the database
connectDB();

// Set up the user router
app.use('/api/user', userRouter);

// Corrected route handler
app.get('/', (req, res) => {
    res.send("Hello from get method");
});
