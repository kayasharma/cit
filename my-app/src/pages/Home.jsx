import React from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import the CSS file for styling
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import the main Swiper styles
// Removed unused imports related to navigation and pagination
// If you're using pagination import "swiper/css";
import "swiper/css/navigation"; // If you're using navigation
import "swiper/css/pagination"; // If you're using pagination

const Home = () => {
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      window.scrollTo({ top: serviceSection.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>
            Explore
            <span> your favourite event </span>
          </h3>
          <button onClick={scrollToService} className="btn">
            <Link to="/" className="btn">
              Discover Events
            </Link>{" "}
          </button>
          {/* Link to Pricing page */}
        </div>

        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1} // One slide per view
          loop={true} // Enable looping
          autoplay={{ delay: 3000 }} // Auto-slide after 3 seconds
          className="home-slider"
        >
          <SwiperSlide></SwiperSlide>

          <SwiperSlide></SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </section>

      {/* Technical Events Section */}
      <section className="service" id="service">
        <h1 className="heading">
          events <span> lists</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i class="fa-solid fa-robot"></i>
            <h3>Robotics</h3>
            <Link to="/pricing" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-motorcycle"></i>
            <h3>Mechanical</h3>
            <Link to="/Mechanical" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-building"></i>
            <h3>Civil</h3>
            <Link to="/Civil" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-computer"></i>
            <h3>Software</h3>
            <Link to="/Software" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-list-check"></i>
            <h3>management</h3>
            <Link to="/Management" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>pahal</h3>
            <Link to="/Pahal" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-volleyball"></i>
            <h3>sports</h3>
            <Link to="/Sports" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-film"></i>
            <h3>entertainment</h3>
            <Link to="/Entertainment" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-stethoscope"></i>
            <h3>pharmacy</h3>
            <Link to="/Pharmacy" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>

          <div className="box">
            <i class="fa-solid fa-medal"></i>
            <h3>E-sports</h3>
            <Link to="/ESports" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-handshake"></i>
            <h3>Enterpreneurship</h3>
            <Link to="/Enterpreneurship" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-table-tennis-paddle-ball"></i>
            <h3>On-spot Events</h3>
            <Link to="/Onspot" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-camera-retro"></i>
            <h3>Photograpgy</h3>
            <Link to="/Photography" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-scale-balanced"></i>
            <h3>law</h3>
            <Link to="/Law" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
          <div className="box">
            <i class="fa-solid fa-music"></i>
            <h3>Special Events</h3>
            <Link to="/Special" className="btn">
              Discover Events
            </Link>{" "}
            {/* Link to Pricing page */}
          </div>
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
            <p>
              CITRONICS, the Annual Techno-Management Fest hosted by Chameli
              Devi Group of Institutions, Indore commenced in 2009 to showcase
              the prowess of Engineering and Management students across India.
              With diverse events spanning Technology and Management, Citronics
              aims to foster a scientific mindset.
            </p>
            <p>
              The 15ᵀᴴ Edition, Citronics 2K24 is all set to take place on 29ᵗʰ
              February, 1ˢᵗ and 2ⁿᵈ March 2024 offering participants a chance to
              compete for a substantial prize money of total INR 7 Lakhs
              accompanied by an appealing Citronics Rolling Trophy.
            </p>
            <a
              href="/brochure.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              citronics brochure
            </a>
            {/* Link to Contact section */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
