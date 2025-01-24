import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Software from "./pages/Software";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-domimpo
import Home from "./pages/Home";
import Robote from "./pages/Robote"; // Import the Pricing page component
import Management from "./pages/Management";
import Civil from "./pages/Civil";
import Pahal from "./pages/Pahal";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Mechanical from "./pages/Mechanical";
import Pharmacy from "./pages/Pharmacy";
import Esports from "./pages/Esports";
import Onspotevents from "./pages/Onspotevents";
import Entrepreneurship from "./pages/Entrepreneurship";
import Law from "./pages/Law";
import Photography from "./pages/Photography";
import Specialevents from "./pages/Specialevents";

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
          <Route path="/Software" element={<Software />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/Pahal" element={<Pahal />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Mechanical" element={<Mechanical />} />
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/Sports" element={<Esports />} />
          <Route path="/Onspotevents" element={<Onspotevents />} />
          <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/Law" element={<Law />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/Specialevents" element={<Specialevents />} />
          <Route path="/Timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
