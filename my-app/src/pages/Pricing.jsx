import React from "react";
import "./Pricing.css"; // Ensure the CSS is imported

const Pricing = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">
        Robotic <span>Events</span>
      </h1>

      <div className="box-container">
        {/* Robo War */}
        <div className="box">
          <h3 className="title">Robo War</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹50,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹30,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹2,500/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                className="rules-link"
                href="/robo_war.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>

        {/* Robo Race */}
        <div className="box">
          <h3 className="title">Robo Race</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹14,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹6,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹500/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                href="/roborace.pdf"
                className="rules-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>

        {/* Robo Soccer */}
        <div className="box">
          <h3 className="title">Robo Soccer</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹10,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹5,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹300/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                className="rules-link"
                href="/robosoccor.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>

        {/* Line Follower */}
        <div className="box">
          <h3 className="title">Line Follower</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹14,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹16,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹500/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                className="rules-link"
                href="/linefollower.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>

        {/* Maze Solver */}
        <div className="box">
          <h3 className="title">Maze Solver</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹10,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹5,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹300/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                className="rules-link"
                href="/mazesolver.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
            </li>
          </ul>
          <a href="#brn" className="btn">
            Register here
          </a>
        </div>
        <div className="box">
          <h3 className="title">pick-n-play</h3>
          <h3 className="amount">prizes</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>1st: ₹10,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>2nd: ₹5,000/-
            </li>
            <li>
              <i className="fas fa-check"></i>entry fees: ₹300/-
            </li>
            <li>
              <i className="fas fa-check"></i>
              <a
                className="rules-link"
                href="/picknplay.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                rules!
              </a>
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

export default Pricing;
