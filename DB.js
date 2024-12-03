const {Client} = require('pg');

const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});
const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL Database');
    } catch (err) {
        console.error('Connection error:', err.stack);
        process.exit(1); // Exit the process on failure
    }
};
   

module.exports = { connectDB, client };