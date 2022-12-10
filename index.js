import express from "express"
import cors from "cors"
import eventosRoutes from "./src/routes/eventos.routes.js"
import usersRoutes from "./src/routes/user.routes.js"
import reservasRoutes from "./src/routes/reserva.routes.js"
import artistasRoutes from "./src/routes/artista.routes.js"

const app = express()

const PORT = 3001
app.use(cors())
app.use(express.json())
app.use(eventosRoutes)
app.use(usersRoutes)
app.use(reservasRoutes)
app.use(artistasRoutes)
app.get('/', (req,res) => {
    res.send('<h1>ola</h1>')
})
app.listen(PORT, () => {
    console.log("server running on ", PORT)
})
