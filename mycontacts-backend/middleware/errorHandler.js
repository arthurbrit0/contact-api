import {constants} from '../constants.js'

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validação falhou", 
                message: err.message, 
                stackTrace: err.stack}
            );
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Não encontrado", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
            res.json({
                title: "Não autorizado", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            res.json({
                title: "Proibido", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title: "Erro no servidor", 
                message: err.message, 
                stackTrace: err.stack
            });

        default:
            console.log("Sem erros na requisição")
            break;
    }

};

