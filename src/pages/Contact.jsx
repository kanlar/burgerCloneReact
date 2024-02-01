import React from "react";
import BannerImg from "../assets/banner.png";

function Contact() {
  return (
    <div className="contact" style={{ height: "100vh" }}>
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${BannerImg})`,
          height: "450px",
          marginTop: "30%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Lütfen mesajınızı giriniz.."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
