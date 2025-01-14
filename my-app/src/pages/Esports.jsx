import React from "react";
import "./Pricing.css"; // Ensure the CSS is imported

const Esports = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">
        e-sports <span>events</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">bgmi</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>First Runner up: ₹1000
            </li>
            <li>
              <i className="fas fa-check"></i>Team members: 4 (max)
            </li>
            <li>
              <i className="fas fa-check"></i>Food and drinks
            </li>
            <li>
              <i className="fas fa-check"></i>Invitation card
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>
        <div className="box">
          <h3 className="title">free fire</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>First Runner up: ₹1000
            </li>
            <li>
              <i className="fas fa-check"></i>Team members: 4 (max)
            </li>
            <li>
              <i className="fas fa-check"></i>Food and drinks
            </li>
            <li>
              <i className="fas fa-check"></i>Invitation card
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Esports;
