import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Buy from "./components/Buy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Buy />
      <Checkout />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
