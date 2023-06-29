import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
const Header = () => {
  return (
    <header className="headerContainer">
      <img src="https://driffle.com/logo/driffle-logo-white.svg" alt="" />
      <div className="headerContent">
        <p className="currency">India (English)-INR</p>
        <img
          className="cart"
          src="https://driffle.com/icons/cart-24.svg"
          alt=""
        />
        <BsSuitHeart className="heartIcon" />
        <IoMdContact className="contactIcon" />
      </div>
    </header>
  );
};
export default Header;
