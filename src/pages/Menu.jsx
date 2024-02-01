import React from "react";
import ItemCart from "../components/ItemCart";
import Data from "../data/data.json";
const data = Data.item;

function Menu() {
  return (
    <>
      {data.map((item) => {
        return <ItemCart item={item} key={item.id} />;
      })}
    </>
  );
}

export default Menu;
