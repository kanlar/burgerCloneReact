import React from "react";
import Logo from "../assets/burgerlogo.png";
import { NavLink } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function Navbar() {
  return (
    <>
      <nav className="mainNav">
        <NavLink to="/">
          <img src={Logo} alt="" style={{ height: "60px", width: "120px" }} />
        </NavLink>
        <div className="nav-link">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">Hakkımızda</NavLink>
          <NavLink to="/contact">Iletişim</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
