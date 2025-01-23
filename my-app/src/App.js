import React from "react";
import "./App.css";
import Header from "./pages/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-domimpo
import Home from "./pages/Home";
import Robote from "./pages/Robote"; // Import the Pricing page component

import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "./pages/Timeline";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/Robote" element={<Robote />} />{" "}
          {/* Pricing page route */}
          <Route path="/Timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
