import { Router } from "express"
import { getReservas, makeReserva, reservaPorUsuario, deleteReserva } from "../controllers/reservas.controllers.js"

const router = Router()

router.get('/reservas', getReservas)

router.post('/reservas', makeReserva)

router.get('/reservaPorUsuario/:id', reservaPorUsuario)

router.delete('/reservas/:id', deleteReserva)

export default router