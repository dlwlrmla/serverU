import { Router } from "express"
import { getUsers, getUser, updateUser } from "../controllers/users.controllers.js"

const router = Router()

router.get('/users', getUsers)

router.get('/usersLog', getUser)

router.put('/users/:id', updateUser)

export default router