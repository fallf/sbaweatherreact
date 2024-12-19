import { useState } from "react";
import Heading from "./components/Heading";
import Weather from "./pages/weather";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
