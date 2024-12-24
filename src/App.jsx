import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Weather from "./pages/Weather";
import Form from "./components/Form";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import "./index.css";

function App() {
  const [searchterm, setSearchterm] = useState(""); // State to hold the search term

  const getWeather = (term) => {
    setSearchterm(term); // Update search term
  };

  return (
    <>
      <VideoBackground /> {/* Video background should be first */}
      <Heading />{" "}
      <div className="content">
        <Form weathersearch={getWeather} />
        <Routes>
          <Route path="/" element={<Weather searchterm={searchterm} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
