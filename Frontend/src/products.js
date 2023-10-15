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
console.log([NFTS])