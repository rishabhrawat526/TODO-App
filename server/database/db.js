import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {

    // const MONGODB_URI =process.env.DB_CONNECTION_STRING.replace('<password>',process.env.DATABASE_PASSWORD);
    const MONGODB_URI = "mongodb+srv://rishuclasher10:ph98lS5uoTAJwNzX@cluster0.eh2gxh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;