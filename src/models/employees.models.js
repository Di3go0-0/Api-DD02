import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String, // debe ser un string
        required: true,  // es obligatorio
        trim: true,// quita los espacios en blanco al principio y al final
    },
    email: {
        type: String, // debe ser un string
        required: true,  // es obligatorio
        trim: true,// quita los espacios en blanco al principio y al final
        unique: true, // no puede haber dos emails iguales
    },
    phone: {
        type : String, //debe ser un string para poder usar + - ( ) y espacios
        required: true,  // es obligatorio
        trim: true,// quita los espacios en blanco al principio y al final
    },
    },
{
    timestamps: true,
    versionKey: false, // Ignora el campo __v
});

export default mongoose.model ("Employee" , employeeSchema)