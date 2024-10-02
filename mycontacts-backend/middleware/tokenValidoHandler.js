import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const validarToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
            if(error) {
                res.status(401);
                throw new Error('Usuário não está autorizado')
            }
            req.user = decoded.user;
            next();
        })
    } else {
        res.status(401);
        throw new Error('Token não encontrado')
    }

})

export default validarToken;