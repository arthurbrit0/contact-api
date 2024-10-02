import asyncHandler from "express-async-handler"
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

//@desc Registar o usuário
//@route POST /api/users/register
//@access public

export const registrarUsuario = asyncHandler(async (req, res) => {
    const {usuario, email, senha} = req.body;
    console.log("Recebendo dados")
    if (!usuario || !email || !senha) {
        console.log("Campos faltando")
        res.status(400);
        throw new Error("Todos os campos são obrigatórios")
    }

    const userDisponivel = await User.findOne({email})
    if(userDisponivel) {
        console.log("Usuario ja registrado")
        res.status(400);
        throw new Error("Usuário já registrado")
    }

    console.log("Hash da senha")
    const hashSenha = await bcrypt.hash(senha, 10);

    console.log("Criação do usuario no BDD")
    const user = await User.create({
        usuario: usuario,
        email: email,
        senha: hashSenha,
    });

    if(user) {
        console.log("Usuario criado com sucesso")
        res.status(201).json({
            _id: user.id,
            email: user.email,
        }) 
    } else {
        console.log("Erro ao criar o usuario")
        res.status(400);
        throw new Error('Dados do usuário não são válidos')
    }  
});

//@desc Logar o usuario
//@route POST /api/users/login
//@access public

export const logarUsuario = asyncHandler(async (req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha) {
        res.status(400);
        throw new Error ("Todos os campos são obrigatórios")
    }

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(senha, user.senha))) {
        const accessToken = jwt.sign({
            user: {
                usuario: user.usuario,
                email: user.email,
                id: user.id
            }
        }, 
        process.env.ACCESS_TOKEN, 
        {expiresIn: "60m"})

        res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("Credenciais inválidas")
    }

    res.json({ message: "Logar o usuário"})    
});
//@desc Informacoes sobre o usuario
//@route GET /api/users/login
//@access private

export const usuarioAtual = asyncHandler(async (req, res) => {
    res.json(req.user)    
});