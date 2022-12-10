import { Router } from "express"
import { getEvents, getEvent,
     createEvento, updateEvento,
    deleteEvento, eventoXArtista} from "../controllers/eventos.controllers.js"

const router = Router()

router.get('/events', getEvents)

router.get('/events/:id', getEvent)

router.post('/events', createEvento)

router.put('/events/:id',updateEvento)

router.delete('/events/:id', deleteEvento)

router.get('/eventsxartista/:id', eventoXArtista)

export default router