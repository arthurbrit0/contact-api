import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: [true, "Adicione o nome de usuário"],
    },
    email: {
        type: String,
        required: [true, "Adicione o endereço de e-mail"],
        unique: [true, "Email de endereço já registrado"],
    },
    senha: {
        type: String,
        required: [true, "Adicione a senha do usuário"],
    },

}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema)
export default User;
