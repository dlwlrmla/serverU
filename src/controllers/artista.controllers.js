import {pool } from "../../db.js"

export const getArtistas = async(req, res) => {
    try {
        const [result] = await pool.query(
            "select * from artista"
        )
        res.json(result)
        console.log(result)
    } catch (error) {
       return res.status(500).json({ message: error.message}) 
    }
}