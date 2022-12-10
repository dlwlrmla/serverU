import { pool } from "../../db.js";

export const getReservas = async (req, res) => {
    try {
        const [result ] = await pool.query(
            "select * from reservaEvento"
        )
        res.json(result)
        console.log(result)
    } catch (error) {
       return res.status(500).json({ message: error.message}) 
    }
}

export const makeReserva = async(req, res) => {
    try {
        const { id_user, id_evento} = req.body
        const [result] = await pool.query(
            "insert into reservaEvento (id_user, id_evento) values (?,?)"
            ,[id_user, id_evento]
        )
        res.json({
            id: result.insertId,
            id_user, id_evento
        })
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const reservaPorUsuario = async (req, res) => {
    try {
/*         const [result] =  await pool.query(
            "select nombre from evento inner join reservaEvento on evento.id_evento = reservaEvento.id_evento and reservaEvento.id_user = ?", req.params.id
        ) */
        const [result] = await pool.query(
            "select evento.nombre, user.nombre as 'usuario', reservaEvento.id_reserva from ((evento inner join reservaEvento on evento.id_evento = reservaEvento.id_evento)inner join user on reservaEvento.id_user = user.id_user) where user.id_user = ?", [req.params.id]
        )
        if(result.length === 0){
            res.status(404).json({message : error.message})
        }
        res.send(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteReserva = async(req, res) => {
    try {
        const [result] = await pool.query(
            "delete from reservaEvento where id_reserva = ?", [req.params.id]
        )
        if(result.affectedRows === 0){
            res.status(404).json({message: "id inexistente"})
        }else {
            res.status(200).json({message : "reserva eliminada"})
        }
    } catch (error) {
       return res.status(500).json({error: error.message}) 
    }
}