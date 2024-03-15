import React from "react";
import bannerImg from "../assets/img/banner_img.jpg";
import "./Banner.css";
import Login from "../pages/Login";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="banner">
      <div className="image_container">
        <img src={bannerImg} alt="" />
      </div>
      <div className="banner_content">
        <h1>Help is a scan away</h1>
        <h2>Empowering families to care for each other, anywhere, anytime.</h2>
        <div className="buttons">
          <button onClick={() => setOpen(true)}>Login</button>

          <button onClick={() => navigate("signup")}>Signup</button>
        </div>
      </div>
      <CustomModal open={open} setOpen={setOpen}>
        <Login />
      </CustomModal>
    </div>
  );
}

export default Banner;
