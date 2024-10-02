import express from 'express';

const router = express.Router();
import { 
    getContatos, 
    getContato, 
    criarContato,
    atualizarContato, 
    deletarContato 
} from "../controllers/contatoController.js";
import validarToken from '../middleware/tokenValidoHandler.js';

router.use(validarToken);

router.route('/').get(getContatos).post(criarContato)

router.route('/:id').get(getContato).put(atualizarContato).delete(deletarContato)

export default router;