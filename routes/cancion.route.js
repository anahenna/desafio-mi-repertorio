import { Router } from "express";
import { allCanciones, deleteCancion, insertarCancion, updateCancion } from "../controller/cancion.controller.js";

const router = Router()

router.post('/cancion', insertarCancion)
router.get('/canciones', allCanciones)
router.put('/cancion/:id', updateCancion)
router.delete('/cancion', deleteCancion)

export default router;