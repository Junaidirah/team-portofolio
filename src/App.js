import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cards from "./components/Card";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Search />
    </div>
  );
}

export default App;
