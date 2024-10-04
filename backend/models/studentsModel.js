import { Schema, model } from "mongoose"

const studentSchema = new Schema({
    nombre: {type: String, required: true},
    apepat: {type: String, required: true},
    apemat: {type: String, required: true},
    edad: {type: Number, required: true},
    carrera: {type: String, required: true}
})

export const Student = new model('Alumnos_Reprobados', studentSchema)