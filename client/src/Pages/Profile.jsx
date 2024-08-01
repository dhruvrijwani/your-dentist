import React from "react";
import "./Profile.css";
import profile_two_img from "./images/Profile_images/dr.manal.jpg";
import profile_one_img from "./images/Profile_images/dr.shreya.jpg";
const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: profile_two_img,
      name: "Dr. Manal Badlani",
      occupation: "Dental Surgeon MDS",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 2,
      photo: profile_one_img,
      name: "Dr.Shreya Shrivastav",
      occupation: "Dental Surgeon MDS",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
  ];
  return (
    <>
      <div className="profile_section_container">
        <h2>
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Meet Our Teem
        </h2>
        <div className="p_info_container" data-aos="fade-right" data-aos-duration="1000">
          {your_profile_details.map((e, index) => (
            <div className="profile_details" key={index}>
              <img src={e.photo} alt="profile_image" id="your_profile_image" />
              <div className="profile_info">
                <h3 className="profile_name">{e.name}</h3>
                <h4 className="profile_occupation">{e.occupation}</h4>
              </div>
              <p className="profile_description">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
