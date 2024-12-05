// const {Client} = require('pg');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


// const client = new Client({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PORT
// });
// const connectDB = async () => {
//     try {
//         await client.connect();
//         console.log('Connected to PostgreSQL Database');
//     } catch (err) {
//         console.error('Connection error:', err.stack);
//         process.exit(1); // Exit the process on failure
//     }
// };
   

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to PostgreSQL Database via Prisma');
    } catch (err) {
        console.error('Prisma connection error:', err.stack);
        process.exit(1);
    }
};

module.exports = { connectDB, prisma };