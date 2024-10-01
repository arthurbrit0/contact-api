import express from 'express';
import dotenv from 'dotenv';
import contatosRoutes from "./routes/contatosRoutes.js"
import { errorHandler }from "./middleware/errorHandler.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contatos", contatosRoutes);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server rodando na porta ${port}`)
})