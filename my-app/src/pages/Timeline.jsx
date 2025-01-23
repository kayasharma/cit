import React, { useEffect } from "react";
import "./Timeline.css"; // Assuming you have your styles in this file
import $ from "jquery";

const Timeline = () => {
  useEffect(() => {
    const $element = $(".each-event, .title");
    const $window = $(window);

    const checkForFade = () => {
      const windowHeight = $window.height();

      $.each($element, function () {
        const $el = $(this);
        const elementHeight = $el.outerHeight();
        const elementOffset = $el.offset().top;
        const space =
          windowHeight - (elementHeight + elementOffset - $window.scrollTop());

        if (space < 60) {
          $el.addClass("non-focus");
        } else {
          $el.removeClass("non-focus");
        }
      });
    };

    $window.on("scroll resize", checkForFade);
    $window.trigger("scroll");

    return () => {
      $window.off("scroll resize", checkForFade);
    };
  }, []);

  return (
    <div className="wrapper">
      <section className="block">
        <div className="each-year">
          <div className="title">Events</div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
          <div className="each-event">
            <div className="event-description">
              <h2>Robotics</h2>

              <a href="/">one</a>
              <a href="/">one</a>
              <a href="/">one</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
