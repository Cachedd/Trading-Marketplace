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

// Query database for getting all columns 
export async function getNftTables() {
   try {
     // Destructing assignment to get the first item out of the array
     const [rows] = await pool.query("SELECT * FROM nft_table")
     return rows
   } catch (err) {
    console.log(err)
   }
}

// Query to get a single nft
export async function getNft(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM nft_table
    WHERE nft_id = ?
    `, [id])
    return rows[0]
}

// Query to get the contact message with given id
export async function getContact(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM contact_form
    WHERE form_id = ?
    `, [id])
    return rows[0]
}

// Query to insert data recieved from frontend to db
export async function createMessage(first_name, last_name, email, message) {
    const [result] = await pool.query(`
    INSERT INTO contact_form (first_name, last_name, email, message)
    VALUES (?, ?, ?, ?)
    `, [first_name, last_name, email, message], 
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Values Inserted")
        }
    })
    
    const id = result.insertId
    return getContact(id)
}


// const result = await createMessage('test', 'test', 'test@gmail.com', 'test')
// console.log(result)

// const nft = await getNft(2)
// console.log(nft)