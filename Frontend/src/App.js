import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Marketplace from "./components/Marketplace";
import ShopContextProvider from "./context/shop-context";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Landing />
        <Marketplace />
        <Cart />
        <Contact />
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
