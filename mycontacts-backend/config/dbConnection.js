import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Banco de dados conectado: ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

