import { Router } from "express"
import { getArtistas } from "../controllers/artista.controllers.js"


const router = Router ()

router.get('/artistas', getArtistas)


export default router