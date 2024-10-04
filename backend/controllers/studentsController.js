import { Student } from "../models/studentsModel.js"

Student.create([
    {
        nombre: "Daniel Alexander",
        apepat: "Munoz",
        apemat: "Dominguez",
        edad: 22,
        carrera: "TIDSM"
    },
    {
        nombre: "Jorge Alberto",
        apepat: "Esparza",
        apemat: "Martinez",
        edad: 21,
        carrera: "TIDSM"
    },
    {
        nombre: "Sergio David",
        apepat: "Valles",
        apemat: "Rojas",
        edad: 50,
        carrera: "TIDSM"
    },
    {
        nombre: "Francisco Javier",
        apepat: "Melendez",
        apemat: "Esoarza",
        edad: 21,
        carrera: "TIDSM"
    },
    {
        nombre: "Eduardo Andre",
        apepat: "Lara",
        apemat: "Beltran",
        edad: 21,
        carrera: "TIDSM"
    }
])

export const test = () => {
    console.log("El controller si jala")
}