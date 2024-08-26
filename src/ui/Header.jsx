import Logo from "./Logo";
import LogoImg from "/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderCart from "../features/cart/HeaderCart";

function Header() {
  const [scrollTopData, setScrollTopData] = useState("");
  const { pathname } = useLocation();
  const headerClass =
    pathname === "/" || pathname === "/contact"
      ? `header clearfix element_to_stick ${scrollTopData}`
      : "header_in clearfix";
  const homeClass = pathname === "/" || pathname === "/home" ? "black_nav" : "";
  const logoClass = pathname === "/contact";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setScrollTopData("");
      } else {
        setScrollTopData("sticky");
      }
    });
  }, []);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={`${headerClass} ${homeClass}`}>
      <div className="container">
        <div id="logo">
          <Link to="/">
            <Logo className={logoClass} sticky={scrollTopData} />
          </Link>
        </div>
        <div className={`layer ${mobileNav ? "layer-is-visible" : ""}`}></div>
        <HeaderCart />
        <Link
          className="open_close"
          onClick={(e) => {
            e.preventDefault();
            setMobileNav(true);
          }}
        >
          <i className="icon_menu"></i>
          <span>Menu </span>
        </Link>
        <nav className={`main-menu ${mobileNav ? "show" : ""}`}>
          <div id="header_menu">
            <Link
              className="open_close"
              onClick={(e) => {
                e.preventDefault();
                setMobileNav(false);
              }}
            >
              <i className="icon_close"></i>
              <span>Menu </span>
            </Link>
            <Link to="/">
              <img src={LogoImg} width="162" height="35" alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileNav(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/restaurants" onClick={() => setMobileNav(false)}>
                Restaurants
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMobileNav(false)}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
