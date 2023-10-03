import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

// Collection of connection which can be reused
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getNftTables() {
    // Destructing assignment to get the first item out of the array
    const [rows] = await pool.query("SELECT * FROM nft_table")
    return rows
}


export async function getNft(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM nft_table
    WHERE nft_id = ?
    `, [id])
    return rows[0]
}

export async function getContact(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM contact_form
    WHERE form_id = ?
    `, [id])
    return rows[0]
}

export async function createNft(first_name, last_name, message) {
    const [result] = await pool.query(`
    INSERT INTO contact_form (first_name, last_name, message)
    VALUES (?, ?, ?)
    `, [first_name, last_name, message])
    const id = result.insertId
    return getContact(id)
}

const result = await createNft('test', 'test', 'test')
console.log(result)

// const nft = await getNft(2)
// console.log(nft)