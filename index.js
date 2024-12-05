require('dotenv').config();
const express = require('express');
const { connectDB, client } = require('./DB');
const PORT = process.env.PORT || 3000;
// const userRouter = require('./Router/userRouter');

const app = express();
const userRouter = require('./Router/userRouter');

app.use(express.json());

// Listen method
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

// Connect to the database
connectDB();

// Set up the user router
app.use('/api/user', userRouter);

// Corrected route handler
app.get('/', (req, res) => {
    res.send("Hello from get method");
});



