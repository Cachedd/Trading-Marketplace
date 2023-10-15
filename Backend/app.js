import express from "express";
import {
  getNftTables,
  createMessage,
  sortAZ,
  sortZA,
  sortPriceCheap,
  sortPriceExpensive,
  searchData,
  sendTransactionData,
} from "./database.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // json body parsed in the request object

// API endpoint for getting all the items from the NFT_table
app.get("/nfts", async (req, res) => {
  const nfts = await getNftTables();
  res.send(nfts);
});

// API endpoint for searching the database
app.post("/search", async (req, res) => {
  const results = await searchData(req.body.title);
  if (results != null) res.send(results);
  else res.status(500).send("Error");
});

// API endpoint for sorting NFTs from A - Z
app.get("/sortAZ", async (req, res) => {
  const sortedNfts = await sortAZ();
  res.send(sortedNfts);
});

// API endpoint for sorting NFTs from Z - A
app.get("/sortZA", async (req, res) => {
  const sortedNfts = await sortZA();
  res.send(sortedNfts);
});

// API endpoint for sorting NFTs from low to high
app.get("/sortCheap", async (req, res) => {
  const sortedNfts = await sortPriceCheap();
  res.send(sortedNfts);
});

// API endpoint for sorting NFTs from high to low
app.get("/sortExpensive", async (req, res) => {
  const sortedNfts = await sortPriceExpensive();
  res.send(sortedNfts);
});

// API endpoint for creating new messages from contact form
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  const msg = await createMessage(firstName, lastName, email, message);
  res.status(201).send(msg);
});

// API endpoint for insert the transaction details from the purchase
app.post("/transaction", async (req, res) => {
  const { purchasedNftIds, signerAddress, totalETH, time, hash } = req.body;
  const transaction = await sendTransactionData(
    purchasedNftIds,
    signerAddress,
    totalETH,
    time,
    hash
  );
  res.status(201).send(transaction);
});

// Global Error Handler. function parameters must start with err
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
