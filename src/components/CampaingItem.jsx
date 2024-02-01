import React from "react";
import Burger1 from "../assets/burger1.jpeg";
import Burger2 from "../assets/burger2.jpeg";
import { Link } from "react-router-dom";
function CampaingItem() {
  return (
    <>
      <div className="img-container">
        <div className="img-item">
          <Link to="menu">
            <img src={Burger1} alt="" />
          </Link>
        </div>
        <div className="img-item">
          <Link to="menu">
            <img src={Burger2} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CampaingItem;
