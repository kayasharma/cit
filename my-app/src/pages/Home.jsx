import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import the CSS file for styling
import "swiper/css"; // Import the main Swiper styles

const Home = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  let runNextAuto = useRef(null);
  let runTimeOut = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const thumbnailItemsDom =
      thumbnailBorderRef.current.querySelectorAll(".item");

    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
    }

    runNextAuto.current = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto.current);
      clearTimeout(runTimeOut.current);
    };
  }, []);

  const showSlider = (type) => {
    const SliderItemsDom = sliderRef.current.querySelectorAll(".item");
    const thumbnailItemsDom =
      thumbnailBorderRef.current.querySelectorAll(".item");

    if (type === "next") {
      sliderRef.current.appendChild(SliderItemsDom[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
      carouselRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderRef.current.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut.current);
    runTimeOut.current = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto.current);
    runNextAuto.current = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  return (
    <div>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src="/images/finalimg1.jpg" alt="" />
            <div className="content">
              <div className="author">POPULAR EVENTS</div>
              <div className="title">ROBO-Race</div>

              <div className="description"></div>
              <div className="buttons">
                <button>RAGISTER NOW</button>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimg2.jpg" alt="" />
            <div className="content">
              <div className="author">POPULAR EVENTS</div>
              <div className="title">PRO-NITE</div>

              <div className="description"></div>
              <div className="buttons">
                <button>REGISTER NOW</button>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimage3.jpg" alt="" />
            <div className="content">
              <div className="author">POPULAR EVENTS</div>
              <div className="title">HACKATHON</div>

              <div className="description"></div>
              <div className="buttons">
                <button>REGISTER NOW</button>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimg4.jpg" alt="" />
            <div className="content">
              <div className="author">POPULAR EVENTS</div>
              <div className="title">Drone Racing</div>

              <div className="description"></div>
              <div className="buttons">
                <button>REGISTER NOW</button>
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          {/* Repeat .item elements as needed */}
        </div>

        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src="/images/finalimage3.jpg" alt="" />
            <div className="content">
              <div className="title">Hackathon</div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimg4.jpg" alt="" />
            <div className="content">
              <div className="title">Drone Racing</div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimg1.jpg" alt="" />
            <div className="content">
              <div className="title">Robo-Race</div>
            </div>
          </div>
          <div className="item">
            <img src="/images/finalimg2.jpg" alt="" />
            <div className="content">
              <div className="title">Pro-nite</div>
            </div>
          </div>
          {/* Repeat .item elements as needed */}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevRef} onClick={() => showSlider("prev")}>
            <i className="fa-solid fa-less-than"></i>
          </button>
          <button id="next" ref={nextRef} onClick={() => showSlider("next")}>
            <i className="fa-solid fa-greater-than"></i>
          </button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>

      {/* Technical Events Section */}
    </div>
  );
};

export default Home;
