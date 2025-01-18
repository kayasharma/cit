import React from "react";
import "./Rotate.css"; // Make sure the path is correct

const Rotate = () => {
  return (
    <div className="banner">
      <div className="slider">
        <div className="item" style={{ "--position": 1 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="images/newrobo.png" alt="" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>LUN DEV</h2>
          <p>
            <b>Web Design</b>
          </p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Rotate;
