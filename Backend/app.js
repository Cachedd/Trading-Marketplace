import express from 'express'
import {getNftTables, getNft, getContact, createMessage} from './database.js'
import cors from 'cors'

const app = express()

// Middleware
app.use(cors())
app.use(express.json()) // json body parsed in the request object

// API endpoint for getting all the items from the NFT_table 
app.get("/nfts", async (req, res) => {
    const nfts = await getNftTables()
    res.send(nfts)
})

// API endpoint for creating new messages from contact form
app.post("/contact", async (req, res) => {
    const {firstName, lastName, email, message} = req.body
    const msg = await createMessage(firstName, lastName, email, message)
    res.status(201).send(msg)
})

// Global Error Handler. function parameters must start with err
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(8080, () => {
    console.log('Server is running on port 8080')
})