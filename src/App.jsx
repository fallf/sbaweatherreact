import { useState } from "react";
import Heading from "./components/Heading";
import Weather from "./pages/weather";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
