import asyncHandler from "express-async-handler"

//@desc Pegar todos os contatos
//@route GET /api/contacts
//@access public

export const getContatos = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Pegar todos os contatos"})
});

//@desc Criar novo contato
//@route POST /api/contacts
//@access public

export const criarContato = asyncHandler(async (req, res) => {
    const {nome, email, telefone} = req.body;
    if(!nome || !email || !telefone) {
        res.status(400);
        throw new Error("Todos os campos são obrigatórios!")
    }
    res.status(200).json({message: "Criar contato"})
});

//@desc Pegarum contato especifico
//@route GET /api/contacts/:id
//@access public

export const getContato = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Pegar o contato ${req.params.id}`})
});

//@desc Atualizar um contato específico
//@route PUT /api/contacts/:id
//@access public

export const atualizarContato = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Contato atualizado para ${req.params.id}`})
});

//@desc Deletar um contato específico
//@route DELETE /api/contacts/:id
//@access public

export const deletarContato = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Contato ${req.params.id} deletado`})
});
