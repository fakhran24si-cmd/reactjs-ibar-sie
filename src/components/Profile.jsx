// src/components/Profile.jsx
//import React from "react";
import BiodataItem from "./BiodataItem";
import pfpImage from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="pfp-box">
        <img src={pfpImage} alt="Profile" />
      </div>
      <div className="biodata-box">
        <BiodataItem label="Nama" value="Nama Kamu" />
        <BiodataItem label="Kelas" value="Kelas Kamu" />
        <BiodataItem label="Jurusan" value="Jurusan Kamu" />
        <BiodataItem label="Asal" value="Pekanbaru" />
        <BiodataItem label="Usia" value="20" />
        <BiodataItem label="Hobi" value="Coding & Marketing" />
      </div>
    </div>
  );
};

export default Profile;
