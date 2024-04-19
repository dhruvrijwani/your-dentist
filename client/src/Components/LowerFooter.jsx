import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about_long_des_data from '../Pages/PagesData/AboutData';
import './LowerFooter.css';

function LowerFooter() {


  const nav_data = [
    { index: 1, link_to: '/#home', nav_name: 'Home' },
    { index: 2, link_to: '/#about-doctors', nav_name: 'About' },
    { index: 3, link_to: '/#our-services', nav_name: 'Treatments' },
    {
      index: 4,
      link_to: '/dental-clinic/appointment',
      nav_name: 'Appointment',
    },
    { index: 5, link_to: '/#contact-us', nav_name: 'Contact Us' },
  ];
  const contact_data = [
    {
      index: 1,
      title: 'Email:',
      cu_data: 'manalbadlani@gmail.com',
    },
    {
      index: 2,
      title: 'Phone:',
      cu_data: '7411566403',
    },
  ];

  const Treatments = [
    { index: 1, link_to: '/treatments', treatment_name: 'Dental Fillings' },
    { index: 2, link_to: '/treatments', treatment_name: 'Orthodontic Treatment/Braces' },
    { index: 3, link_to: '/treatments', treatment_name: 'Root Canal Treatment' },
    { index: 4, link_to: '/treatments', treatment_name: 'Teeth Whitening'},
    { index: 5, link_to: '/treatments', treatment_name: 'Dental Implants' },
    { index: 6, link_to: '/treatments', treatment_name: 'Pediatric Dentistry' },
    { index: 7, link_to: '/treatments', treatment_name: 'Dentures' },
    { index: 7, link_to: '/treatments', treatment_name: 'Cosmetic Dentistry' },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i class="fa-brands fa-facebook-f"></i>,
      on_link: 'https://www.facebook.com/',
    },
    {
      index: 2,
      img: <i class="fa-brands fa-instagram"></i>,
      on_link: 'https://www.instagram.com/',
    },
    {
      index: 3,
      img: <i class="fa-brands fa-twitter"></i>,
      on_link: 'https://www.twitter.com/',
    },
    {
      index: 4,
      img: <i class="fa-sharp fa-solid fa-globe"></i>,
      on_link: '#home',
    },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="about_us">
          <div className="wrapper_container_ab">
            <h2>About Us</h2>
            <p data-aos="fade-right">{about_long_des_data.text}</p>
          </div>
        </div>
        <div className="footer_menu">
          <div className="wrapper_container_fm">
            <h2>Quick Links</h2>
            <div className="footer_data_menu">
              {nav_data.map((data, index) => {
                return (
                  <HashLink
                    className="nav_data"
                    key={index}
                    to={data.link_to}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {data.nav_name}
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer_menu treatments">
          <div className="wrapper_container_fm">
            <h2>Our Treatments</h2>
            <div className="footer_data_menu">
              {Treatments.map((data, index) => {
                return (
                  <HashLink
                    className="Treatments"
                    key={index}
                    to={data.link_to}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    {data.treatment_name}
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2>Contact Us</h2>
            <div
              className="contact_address"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <address>
                baad me bata dunga
              </address> */}
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p
                    className="cs_data"
                    key={index}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <span style={{ color: '#fff' }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2024
            <a href="/" id="clinic_name">
              YOUR DENTIST.
            </a>
            All Rights Reserved
          </p>
      </div>
    </>
  );
}

export default LowerFooter;
