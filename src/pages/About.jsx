import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
console.log(BannerImage);

function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <img src={BannerImage} alt="" style={{ width: "100%" }} />
      </div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          adipisci explicabo ipsam ad, mollitia dolor blanditiis saepe veritatis
          fugit, nihil minus ea ex cum, ab placeat quod nobis reprehenderit
          tempora Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque adipisci explicabo ipsam ad, mollitia dolor blanditiis saepe
          veritatis fugit, nihil minus ea ex cum, ab placeat quod nobis
          reprehenderit tempora Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque adipisci explicabo ipsam ad, mollitia dolor
          blanditiis saepe veritatis fugit, nihil minus ea ex cum, ab placeat
          quod nobis reprehenderit tempora. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque adipisci explicabo ipsam ad,
          mollitia dolor blanditiis saepe veritatis fugit, nihil minus ea ex
          cum, ab placeat quod nobis reprehenderit tempora Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque adipisci explicabo ipsam ad,
          mollitia dolor blanditiis saepe veritatis fugit, nihil minus ea ex
          cum, ab placeat quod nobis reprehenderit tempora Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque adipisci explicabo ipsam ad,
          mollitia dolor blanditiis saepe veritatis fugit, nihil minus ea ex
          cum, ab placeat quod nobis reprehenderit tempora.
        </p>
      </div>
    </div>
  );
}

export default About;
