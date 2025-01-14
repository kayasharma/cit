import React from "react";
import "./Pricing.css"; // Ensure the CSS is imported

const Civil = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">
        Civil <span>Events</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">Arch Mania</h3>
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
            Register: ₹200
          </a>
        </div>

        <div className="box">
          <h3 className="title">Urban Planning</h3>
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
            Register: ₹200
          </a>
        </div>
        <div className="box">
          <h3 className="title">Tic-Tac-Toe</h3>
          <h3 className="amount">Prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st:₹2,000
            </li>
            <li>
              <i className="fas fa-check"></i>2nd:₹1,000
            </li>
            <li>
              <i className="fas fa-check"></i>Entry fee:₹50/-
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
          <h3 className="title">Jenga Block</h3>
          <h3 className="amount">Prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st:₹2,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd:₹1 ,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>Food and drinks
            </li>
            <li>
              <i className="fas fa-check"></i>Invitation card
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register: ₹200
          </a>
        </div>
      </div>
    </section>
  );
};

export default Civil;
