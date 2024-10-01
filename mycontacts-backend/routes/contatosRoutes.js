const express = require('express');
const router = express.Router();
const { getContatos, getContato, criarContato, atualizarContato, deletarContato } = require("../controllers/contatoController")

router.route('/').get(getContatos)

router.route('/:id').get(getContato)

router.route('/').post(criarContato)

router.route('/:id').put(atualizarContato)

router.route('/:id').delete(deletarContato)

module.exports = router;