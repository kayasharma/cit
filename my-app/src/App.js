import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Rotate from "./pages/Rotate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-domimpo
import Home from "./pages/Home";
import Pricing from "./pages/Pricing"; // Import the Pricing page component
import Mechanical from "./pages/Mechanical";
import Software from "./pages/Software";
import Civil from "./pages/Civil";
import Management from "./pages/Management";
import Pahal from "./pages/Pahal";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Pharmacy from "./pages/Pharmacy";
import Esports from "./pages/Esports";
import Enterpreneurship from "./pages/Enterpreneurship";
import Law from "./pages/Law";
import Special from "./pages/Special";
import Onspot from "./pages/Onspot";
import Photography from "./pages/Photography";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "./pages/Timeline";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/pricing" element={<Pricing />} />{" "}
          {/* Pricing page route */}
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Mechanical" element={<Mechanical />} />
          <Route path="/Software" element={<Software />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/Pahal" element={<Pahal />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/Esports" element={<Esports />} />
          <Route path="/Enterpreneurship" element={<Enterpreneurship />} />
          <Route path="/Law" element={<Law />} />
          <Route path="/Special" element={<Special />} />
          <Route path="/Onspot" element={<Onspot />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/Rotate" element={<Rotate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
