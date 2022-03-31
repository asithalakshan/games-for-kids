import "./App.css";
import { React, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Harmful from "./components/Pages/Harnful";
import FindAddictedkids from "./components/Pages/FindAddictedkids";
import Reduceaddiction from "./components/Pages/Reduceaddiction";
import ContactUs from "./components/Pages/ContactUs";
import ErrorPage from "./components/Pages/Errorpage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Navbar />

      {loading ? (
        <ScaleLoader
          className="loader"
          color={"#F5A623"}
          loading={loading}
          size={80}
        />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Harmful" element={<Harmful />} />
            <Route path="/FindAddictedkids" element={<FindAddictedkids />} />
            <Route path="/Reduceaddiction" element={<Reduceaddiction />} />
            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
