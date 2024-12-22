import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Weather from "./pages/Weather";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [searchterm, setSearchterm] = useState(""); // State to hold the search term

  const getWeather = (term) => {
    setSearchterm(term); // Update search term
  };

  return (
    <>
      <Heading />
      <Form weathersearch={getWeather} />
      <Routes>
        <Route path="/" element={<Weather searchterm={searchterm} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
