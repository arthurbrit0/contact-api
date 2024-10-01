import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"],
    },
    email: {
        type: String,
        required: [true, "O email é obrigatório"],
    },
    telefone: {
        type: String,
        required: [true, "O telefone é obrigatório"],
    },
}, 
{
    timestamps: true,
}
);

const Contato = mongoose.model("Contato", contactSchema);

export default Contato;