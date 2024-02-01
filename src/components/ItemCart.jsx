import React from "react";
import ItemImage from "../assets/burger.jpg";

function ItemCart({ item }) {
  console.log(ItemImage);
  return (
    <>
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${ItemImage})` }}></div>
        <h1>{item.title}</h1>
        <h6>{item.content}</h6>
        <p>{item.price}</p>
      </div>
    </>
  );
}

export default ItemCart;
