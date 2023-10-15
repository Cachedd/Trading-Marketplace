import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

// Collection of connection which can be reused
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// Query database for getting all columns
export async function getNftTables() {
  try {
    // Destructing assignment to get the first item out of the array
    const [rows] = await pool.query("SELECT * FROM nft_table");
    return rows;
  } catch (err) {
    console.log(err);
  }
}

// Query to sort NFTs from A-Z
export async function sortAZ() {
  const [rows] = await pool.query(`
    SELECT * 
    FROM nft_table
    ORDER BY title ASC;     
    `);
  return rows;
}

// Query to sort NFTs from Z-A
export async function sortZA() {
  const [rows] = await pool.query(`
    SELECT * 
    FROM nft_table
    ORDER BY title DESC;     
    `);
  return rows;
}

// Query to sort NFTs from low - high
export async function sortPriceCheap() {
  const [rows] = await pool.query(`
    SELECT * 
    FROM nft_table
    ORDER BY price ASC;     
    `);
  return rows;
}

// Query to sort NFTs from high - low
export async function sortPriceExpensive() {
  const [rows] = await pool.query(`
    SELECT * 
    FROM nft_table
    ORDER BY price DESC;     
    `);
  return rows;
}

// Query to insert data recieved from frontend to db
export async function createMessage(first_name, last_name, email, message) {
  const [result] = await pool.query(
    `
    INSERT INTO contact_form (first_name, last_name, email, message)
    VALUES (?, ?, ?, ?)
    `,
    [first_name, last_name, email, message],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
}

// Query to insert data recieved from transaction
export async function sendTransactionData(
  purchasedNftIds,
  signerAddress,
  totalETH,
  time,
  hash
) {
  const [result] = await pool.query(
    `
    INSERT INTO order_table (purchasedNftIds, signerAddress, totalETH, time, hash)
    VALUES (?, ?, ?, ?, ?)
    `,
    [purchasedNftIds, signerAddress, totalETH, time, hash],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
}
export async function searchData(title) {
  try {
    const [result] = await pool.query(
      `
        SELECT * FROM nft_table WHERE title LIKE ?
        `,
      "%" + title + "%"
    );
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// const result = await createMessage('test', 'test', 'test@gmail.com', 'test')
// console.log(result)

// const nft = await getNft(2)
// console.log(nft)
