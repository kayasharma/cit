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
      <section className="service" id="service">
        <h1 className="heading">
          events <span> lists</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-robot"></i>
            <h3>Robotics</h3>
            <Link to="/pricing" className="btn">
              Discover Events
            </Link>
          </div>
          <div className="box">
            {" "}
            <i class="fa-solid fa-motorcycle"></i> <h3>Mechanical</h3>{" "}
            <Link to="/Mechanical" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-building"></i> <h3>Civil</h3>{" "}
            <Link to="/Civil" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-computer"></i> <h3>Software</h3>{" "}
            <Link to="/Software" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-list-check"></i> <h3>management</h3>{" "}
            <Link to="/Management" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-lightbulb"></i> <h3>pahal</h3>{" "}
            <Link to="/Pahal" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-volleyball"></i> <h3>sports</h3>{" "}
            <Link to="/Sports" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-film"></i> <h3>entertainment</h3>{" "}
            <Link to="/Entertainment" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-stethoscope"></i> <h3>pharmacy</h3>{" "}
            <Link to="/Pharmacy" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-medal"></i> <h3>E-sports</h3>{" "}
            <Link to="/ESports" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-handshake"></i> <h3>Enterpreneurship</h3>{" "}
            <Link to="/Enterpreneurship" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-table-tennis-paddle-ball"></i>{" "}
            <h3>On-spot Events</h3>{" "}
            <Link to="/Onspot" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-camera-retro"></i> <h3>Photograpgy</h3>{" "}
            <Link to="/Photography" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-scale-balanced"></i> <h3>law</h3>{" "}
            <Link to="/Law" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>{" "}
          <div className="box">
            {" "}
            <i class="fa-solid fa-music"></i> <h3>Special Events</h3>{" "}
            <Link to="/Special" className="btn">
              {" "}
              Discover Events{" "}
            </Link>{" "}
            {/* Link to Pricing page */}{" "}
          </div>
          {/* Repeat .box elements as needed */}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h1 className="heading">
          <span>about </span> citronics
        </h1>

        <div className="row">
          <div className="image"></div>

          <div className="content">
            <h3>heading</h3>
            <a
              href="/brochure.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              citronics brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
