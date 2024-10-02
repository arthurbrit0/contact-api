import express from 'express';
import dotenv from 'dotenv';
import contatosRoutes from "./routes/contatosRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler }from "./middleware/errorHandler.js"
import { connectDb } from './config/dbConnection.js'

dotenv.config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contatos", contatosRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server rodando na porta ${port}`)
})