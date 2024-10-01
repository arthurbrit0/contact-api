//@desc Pegar todos os contatos
//@route GET /api/contacts
//@access public

const getContatos = (req, res) => {
    res.status(200).json({message: "Pegar todos os contatos"})
}

//@desc Criar novo contato
//@route POST /api/contacts
//@access public

const criarContato = (req, res) => {
    res.status(200).json({message: "Criar contato"})
}

//@desc Pegarum contato especifico
//@route GET /api/contacts/:id
//@access public

const getContato = (req, res) => {
    res.status(200).json({message: `Pegar o contato ${req.params.id}`})
}

//@desc Atualizar um contato específico
//@route PUT /api/contacts/:id
//@access public

const atualizarContato = (req, res) => {
    res.status(200).json({message: `Contato atualizado para ${req.params.id}`})
}

//@desc Deletar um contato específico
//@route DELETE /api/contacts/:id
//@access public

const deletarContato = (req, res) => {
    res.status(200).json({message: `Contato ${req.params.id} deletado`})
}

module.exports = { 
    getContatos, 
    criarContato,
    getContato,
    atualizarContato,
    deletarContato
};