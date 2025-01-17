import React from "react";
import "./Pricing.css";

const Mechanical = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">
        Mechanical <span>Events</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <h3 className="title">Slow Cycle</h3>
          <h3 className="amount">Prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st
            </li>
            <li>
              <i className="fas fa-check"></i>2nd
            </li>
            <li>
              <i className="fas fa-check"></i>Entry fees:200/-
            </li>
            <li>
              <i className="fas fa-check"></i>Rules!
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>
        <div className="box">
          <h3 className="title">Fun Cart</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>First Runner up: ₹1000
            </li>
            <li>
              <i className="fas fa-check"></i>Team members: 4 (max)
            </li>
            <li>
              <i className="fas fa-check"></i>Entry fee: ₹200/-
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
          <h3 className="title">Cad Championship</h3>
          <h3 className="amount">Prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>Winner:₹2,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>Entry fee:₹100/-
            </li>
            <li>
              <i className="fas fa-check"></i>Rules!
            </li>
            <li>
              <i className="fas fa-check"></i>Head:harsh Dishore
            </li>
          </ul>

          <a href="#brn" className="btn">
            Register Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mechanical;
