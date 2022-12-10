import { createPool } from "mysql2/promise";

export const pool = createPool({
    host:'database-1.cgrkkunfpf15.us-east-1.rds.amazonaws.com',
    port : 3306,
    user : 'admin',
    password : '#Gama1076',
    database  : 'eventos'
})
