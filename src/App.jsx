import React from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import AllFoods from "./components/AllFoods.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <AllFoods />
      <Footer/>
    </>
  );
}

export default App;
