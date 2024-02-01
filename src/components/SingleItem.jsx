import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/banneryeni.jpg";

function SingleItem() {
  return (
    <>
      <div className="mainPage" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="order">
          <Link to="menu">
            <button>Sipariş Ver</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleItem;
