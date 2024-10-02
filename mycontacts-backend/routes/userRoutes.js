import express from 'express';
import { registrarUsuario } from '../controllers/userController.js';
import { logarUsuario } from '../controllers/userController.js';
import { usuarioAtual } from '../controllers/userController.js';
import validarToken from '../middleware/tokenValidoHandler.js';

const router = express.Router();

router.post("/registrar", registrarUsuario);

router.post("/login", logarUsuario);

router.get("/user", validarToken, usuarioAtual);

export default router;
