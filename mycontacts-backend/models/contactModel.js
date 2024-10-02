import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
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

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;