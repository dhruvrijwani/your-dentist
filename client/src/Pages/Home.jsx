import React, { useEffect } from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "../Pages/images/slide_one.png";
import slider_two from "../Pages/images/slide_two.png";
import slider_three from "../Pages/images/slide_three.png";
import { HashLink } from "react-router-hash-link";

const Home = () => {

  useEffect(() => {
    const handleChatWithDoctor = () => {
      const phoneNumber = '+917411566403';
      const message = 'Hello, I would like to chat with the doctor regarding an appointment.';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    };

    const chatBtn = document.querySelector(".chat-btn");
    chatBtn.addEventListener("click", handleChatWithDoctor);

    return () => {
      chatBtn.removeEventListener("click", handleChatWithDoctor);
    };
  }, []);

  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              />
            </div>
            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  We Care For Your Smile
                </h2>
                <p>
                  We Believe Everyone should have easy access to great dental
                  clinic
                </p>
                <div className="social_links"></div>
              </div>
              
            </div>
          </div>

          
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
            <h2>Flexible Schedule</h2>
              <p>
                We work on holidays, besides working late on regular days. In
                case of emergencies we accept appointments.
              </p>
              <HashLink style={{ textDecoration: "none", color: "#fff" }}>
                <div className="transperent_btn chat-btn"> Chat with Doctor</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Reach Out To Us</h2>
              <p>
                We are always here to connect and answer any question you might have!
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Read More</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Opening Hours</h2>
              <p>
                Monday – Saturday : 11.00 am – 08.00 pm Sunday : 10.00 am – 01.00
                pm
              </p>

              <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
