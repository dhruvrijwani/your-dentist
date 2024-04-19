import React from 'react';
import "./Treatments.css";
import { HashLink } from 'react-router-hash-link';

const Treatments = () => {
  return (
    <div className="wrapper-treatments">

      {/* <!-- service1 --> */}
      <div className="services" data-aos="fade-right" data-aos-duration="1000">
      <div className="service-image" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/epmszgj.svg')"}}></div>

        <div className="service-content">
            <h1>Root Canal</h1>
            <p>Root canal treatment addresses infected or damaged tooth pulp. Through careful cleaning and sealing of the tooth's interior, this procedure aims to save the tooth, alleviating pain and preventing further complications while restoring function and preserving oral health</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
          </div>

      </div>
      {/* <!-- service2 --> */}
      <div className="services2" data-aos="fade-left" data-aos-duration="1000" >
        <div className="service-content2">
          <h1>Crown and Bridges</h1>
            <p>Crown and bridges serve as vital restorative solutions for damaged or missing teeth. These custom-fitted prosthetics not only enhance the appearance of the smile but also improve functionality by restoring chewing ability and maintaining proper alignment of adjacent teeth.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>
        <div className="service-image2" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/xckdqmsbqpdhzlhvwood.svg')"}}></div>

      </div>
      {/* <!-- service3 --> */}
      <div className="services" data-aos="fade-right" data-aos-duration="1000" >
      <div className="service-image" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/trteeoeviitzkuduaj.svg')"}}></div>
        <div className="service-content">
          <h1>Smile Designing</h1>
          <p>Smile designing encompasses personalized treatment plans tailored to achieve the desired smile aesthetic. By considering factors such as tooth shape, color, alignment, and facial features, this comprehensive approach combines various cosmetic procedures to create a natural, harmonious smile that enhances confidence and overall well-being.</p>
          <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
          </HashLink>
        </div>

      </div>
      {/* <!-- service4 --> */}
      <div className="services2" data-aos="fade-left" data-aos-duration="1000" >
        <div className="service-content2">
          <h1>Dental Implants</h1>
            <p>Dental implants offer a durable and natural-looking solution to tooth loss. By surgically placing artificial roots into the jawbone, dental implants provide a stable foundation for replacement teeth, promoting oral health, preserving bone structure, and restoring confidence in one's smile</p>          
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>
        <div className="service-image2" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/zuabbbboyalde.svg')"}}></div>

      </div>
      {/* <!-- service5 --> */}
      <div className="services" data-aos="fade-right" data-aos-duration="1000" >
      <div className="service-image" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/ztyabpe.svg')"}}></div>
        <div className="service-content">
          <h1>Dentures</h1>
            <p>Dentures are removable prosthetic devices used to replace missing teeth and surrounding tissue. Whether partial or complete, dentures restore oral function, improve aesthetics, and support facial structures, enabling individuals to speak, chew, and smile with confidence and comfort.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>

      </div>
      {/* <!-- service6 --> */}
      <div className="services2" data-aos="fade-left" data-aos-duration="1000" >
        <div className="service-content2">
          <h1>Dental Fillings</h1>
            <p>Dental fillings are commonly used to repair cavities and restore damaged teeth. Utilizing materials such as composite resin or amalgam, fillings effectively seal off decayed areas, prevent further deterioration, and restore the tooth's strength and integrity, promoting long-term oral health and functionality.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>
        <div className="service-image2" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/twzwqrrllonb.svg')"}}></div>
      
      </div>
      {/* <!-- service7  --> */}
      <div className="services" data-aos="fade-right" data-aos-duration="1000" >
      <div className="service-image" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/znrdvnh.svg')"}}></div>
        <div className="service-content">
          <h1>Braces</h1>
          <p> Orthodontic treatment involves correcting misaligned teeth and bite issues to improve both dental health and aesthetics. Through the use of braces, aligners, or other orthodontic appliances, this treatment gradually repositions teeth into proper alignment, enhancing the smile's appearance and promoting optimal oral function and hygiene.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>

      </div>
      {/* <!-- service8  --> */}
      <div className="services2" data-aos="fade-left" data-aos-duration="1000" >
        <div className="service-content2">
          <h1>Dental Extraction</h1>
          <p> Dental extraction involves the removal of problematic or damaged teeth to alleviate pain, prevent infection, and maintain overall oral health. Whether due to severe decay, infection, or crowding, this procedure aims to preserve surrounding tissues and restore oral function and comfort.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>
        <div className="service-image2" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/xckdqmsbqpdhzlhvwood.svg')"}}></div>
        </div>

        {/* <!-- service9  --> */}
      <div className="services" data-aos="fade-right" data-aos-duration="1000" >
      <div className="service-image" style={{backgroundImage: "url('https://d3t5ai5vcxyqte.cloudfront.net/media/xerhpggjxuxmfpsu.svg')"}}></div>
        <div className="service-content">
          <h1>Cosmetic Dentistry</h1>
          <p> Cosmetic dentistry focuses on enhancing the appearance of the smile through various treatments. From teeth whitening and veneers to gum contouring and dental bonding, these procedures address imperfections and asymmetries, creating a harmonious, confident smile that reflects individual personality and style.</p>
            <HashLink to="/your-dentist/appointments">
              <button className="service-button">Book Appointment</button>
            </HashLink>
        </div>

      </div>

    </div>
  )
}

export default Treatments