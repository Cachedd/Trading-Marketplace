import api from "./api/posts";

// // For all references please see references.txt file in repository (Frontend folder)
// import nft1 from "../src/assets/nft1.jpg";
// // https://unsplash.com/photos/dWHMEcdZF4U
// import nft2 from "../src/assets/nft2.jpg";
// // https://unsplash.com/photos/WyUmTnaKnRs
// import nft3 from "../src/assets/nft3.jpg";
// // https://unsplash.com/photos/tJSLtgcuoxI
// import nft4 from "../src/assets/nft4.jpg";
// // https://unsplash.com/photos/oWFZm4NAvMQ
// import nft5 from "../src/assets/nft5.jpg";
// // https://unsplash.com/photos/561gdO-k6-g
// import nft6 from "../src/assets/nft6.jpg";
// // https://unsplash.com/photos/XwJ_QoxFyhc
// import nft7 from "../src/assets/nft7.jpg";
// // https://unsplash.com/photos/u5vq1ZT1OAI
// import nft8 from "../src/assets/nft8.jpg";
// // https://unsplash.com/photos/PiqZfESKt3k
// import nft9 from "../src/assets/nft9.jpg";
// // https://unsplash.com/photos/oww5fgE_7pk
// import nft10 from "../src/assets/nft10.jpg";
// // https://unsplash.com/photos/PiqZfESKt3k
// import nft11 from "../src/assets/nft11.jpg";
// // https://unsplash.com/photos/Zr8w9mNN18A
// import nft12 from "../src/assets/nft12.jpg";
// // https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-sandy-beach-cFtnsJ74Z-8

// // This document contains an array of NFT objects I am using as a temporary database.

// export const NFTS = [
//   {
//     id: 1,
//     title: "MOON",
//     price: 0.1,
//     image: nft1,
//   },
//   {
//     id: 2,
//     title: "TWIST",
//     price: 0.12,
//     image: nft2,
//   },
//   {
//     id: 3,
//     title: "SPHERE",
//     price: 0.15,
//     image: nft3,
//   },
//   {
//     id: 4,
//     title: "CUBE",
//     price: 0.3,
//     image: nft4,
//   },
//   {
//     id: 5,
//     title: "TUNNEL",
//     price: 0.25,
//     image: nft5,
//   },
//   {
//     id: 6,
//     title: "SUB",
//     price: 0.05,
//     image: nft6,
//   },
//   {
//     id: 7,
//     title: "SPACE",
//     price: 0.1,
//     image: nft7,
//   },
//   {
//     id: 8,
//     title: "BMW",
//     price: 0.12,
//     image: nft8,
//   },
//   {
//     id: 9,
//     title: "SHEESH",
//     price: 0.15,
//     image: nft9,
//   },
//   {
//     id: 10,
//     title: "GALAXY",
//     price: 0.6,
//     image: nft10,
//   },
//   {
//     id: 11,
//     title: "BRIGHT",
//     price: 1,
//     image: nft11,
//   },
//   {
//     id: 12,
//     title: "BEACH",
//     price: 0.2,
//     image: nft12,
//   },
// ];

// Fetch the nft details from nft_table 
const nfts = async () => {
  try {
    const response = await api.get("/nfts");
    return response.data
  } catch (err) {
    console.error(err)
  }
};


export const NFTS = await nfts()
// console.log("This is outside nfts")
console.log([NFTS])