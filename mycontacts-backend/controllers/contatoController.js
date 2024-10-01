import asyncHandler from "express-async-handler"
import Contact from '../models/contactModel.js'

//@desc Pegar todos os contatos
//@route GET /api/contacts
//@access public

export const getContatos = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
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
    const contact = await Contact.create({
        nome,
        email,
        telefone
    })

    res.status(200).json(contact)
});

//@desc Pegarum contato especifico
//@route GET /api/contacts/:id
//@access public

export const getContato = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error ("Contato não encontrado!");
    }

    res.status(201).json(contact)
});

//@desc Atualizar um contato específico
//@route PUT /api/contacts/:id
//@access public

export const atualizarContato = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error ("Contato não encontrado!");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact)
});

//@desc Deletar um contato específico
//@route DELETE /api/contacts/:id
//@access public

export const deletarContato = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error ("Contato não encontrado!");
    }

    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json(contact)
});
