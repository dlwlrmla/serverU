import { pool } from "../../db.js";

export const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query(
            "select * from user"
        )
        res.json(result)
        console.log(result)
    } catch (error) {
       return res.status(500).json({ message: error.message}) 
    }
}

export const getUser = async (req, res) => {
    try {
        const {nombre, password} = req.body
        const [result] = await pool.query(
            "select * from user where nombre = ? and password = ?", [nombre, password]
        )
        if(result.length === 0) {
            res.status(404).json({message : error.message})
        }
        res.send(result)
    } catch (error) {
       return res.status(500).json({message: error.message}) 
    }   
}

export const updateUser = async (req, res) => {
    try {
        const result = await pool.query(
            "update user set ? where id_user = ?", [req.body, req.params.id]
        )
        res.json(result)
    } catch (error) {
       return res.status(500).json ({message: error.message}) 
    }
}