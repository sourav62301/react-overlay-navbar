import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import logo from "./cursor.png";

import { HoverAnimation1, HoverAnimation2 } from "hover-animation";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const options = {
  burgerColor: "black",
  burgerColorHover: "orangered",
  navColor1: "white",
  // navColor2: "orangered",
  // navColor3: "yellowgreen",

  // navColor4: "orange",
  logo: logo,
  logoWidth: "10vmax",
  logoHoverSize: "5vmax",
  logoHoverColor: "red",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-end",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "About",
  link4Text: "Contact Us",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/contact",
  link1Size: "2vmax",
  link1Family: "cursive",
  // link1Color="white"
  link1ColorHover: "orangered",
  link1Margin: "1.5vmax",
  link2Margin: "0vmax",
  link4Margin: "1vmax",

  profileIcon: true,
  profileIconColor: "black",
  profileIconUrl: "/login",
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  searchIconColor: "black",
  SearchIconElement: MdSearch,
  cartIcon: false,
  cartIconColor: "black",
  CartIconElement: MdAddShoppingCart,
  profileIconColorHover: "orangered",
  searchIconColorHover: "orangered",
  cartIconColorHover: "orangered",
  // cartIconMargin: "2vmax",
  profileIconMargin: "2vmax",

  searchIconSize: "3vmax",
  cartIconSize: "3vmax",
  profileIconSize: "3vmax",
};

function App() {
  return (
    <Router>
      <ReactNavbar
        {...options}

        // burgerColor="black"
        // burgerColorHover="orangered"
        // navColor1="white"
        // navColor2="orangered"
        // navColor3="yellowgreen"
        // navColor4="orange"
        // logo={logo}
        // logoWidth="10vmax"
        // logoHoverSize="5vmax"
        // logoHoverColor="red"
        // nav2justifyContent="flex-end"
        // nav3justifyContent="flex-start"
        // link1Text="Home"
        // link2Text="Products"
        // link3Text="About"
        // link4Text="Contact Us"
        // link1Url="/"
        // link2Url="/products"
        // link3Url="/about"
        // link4Url="/contact"
        // link1Size="2vmax"
        // link1Family="cursive"
        // // link1Color="white"
        // link1ColorHover="white"
        // link1Margin="1.5vmax"
        // link2Margin="0vmax"
        // link4Margin="1vmax"
        // profileIcon={true}
      />

      <div className="home"></div>
      <div
        className="footer"
        style={{
          height: "200px",
          backgroundColor: "rgb(20, 20, 20)",
          width: "99vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2vmax",
        }}
      >
        <HoverAnimation1
          Icon={FaInstagramSquare}
          IconSize="4vmax"
          Padding="2vmax"
          Color="orangered"
          BackgroundColor="white"
          Direction="left"
        />

        <HoverAnimation2
          Icon={FaTwitterSquare}
          IconSize="4vmax"
          Padding="2vmax"
          Pace="medium"
          Color="orangered"
          BackgroundColor="white"
        />
      </div>
    </Router>
  );
}

export default App;
