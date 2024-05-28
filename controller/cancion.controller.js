import { cancionModel } from "../models/cancion.model.js";

export const insertarCancion = async(req, res) => {
    try{
        const {titulo, artista, tono} = req.body
        const newCancion = await cancionModel.create({titulo, artista, tono})
        return res.json(newCancion)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export const allCanciones = async(req, res) => {
    try{
        const canciones = await cancionModel.findAll()
        res.json(canciones)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export const updateCancion = async (req, res) => {
    try{
        const {id} = req.params
        const {titulo, artista, tono} = req.body
        const cancion = await cancionModel.update({id, titulo, artista, tono})
        res.json(cancion)

    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export const deleteCancion = async (req, res) => {
    try{
        const {id} = req.query
        const cancion = await cancionModel.remove(id)
        return res.json(cancion)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}