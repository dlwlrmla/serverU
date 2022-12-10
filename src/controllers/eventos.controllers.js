import { pool } from "../../db.js"

export const getEvents = async (req, res) => {
    try {
        const [result] = await pool.query(
            "select * from evento"
        )
        res.json(result)
        console.log(result)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }

}

export const getEvent = async (req, res ) => {
    try {
        const [result] = await pool.query(
            "select * from evento where id_evento = ?", [req.params.id]
        )
        if (result.length === 0 ){
            res.status(404).json({message: error.message})
        }
        res.send(result)
    } catch (error) {
       return res.status(500).json({message: error.message}) 
    }
}

export const createEvento = async (req, res) => {
    try {
        const { nombre } =  req.body
        const [result] = await pool.query(
            "insert into evento (nombre) values (?)",[nombre]
        )
        res.json({
            id : result.insertId,
            nombre
        })
    } catch (error) {
       return res.status(500).json({ message : error.message}) 
    }
}

export const updateEvento = async (req, res ) => {
    try {
        const result = await pool.query(
        "update evento set ? where id_evento = ? ", [req.body, req.params.id])
        res.json(result)
    } catch (error) {
       return res.status(500).json ({message: error.message}) 
    }
}

export const deleteEvento = async (req, res) => {
    try {
        const id = 4
        const [result] = await pool.query(
            `delete from evento where id_evento= ${req.params.id}`
        )
        if(result.affectedRows === 0){
            res.status(404).json({message: "id inexistente"})
        }else{  
            res.status(200).json({ message : "evento eliminado "})
        }
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

export const eventoXArtista = async (req, res) => {
    try {
        const [result] = await pool.query(
            "select * from evento where id_artista = ?", [req.params.id]
        )
        res.json(result)
    } catch (error) {
        return res.status(500).json ({message: error.message})
    }
}