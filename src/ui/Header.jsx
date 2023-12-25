import Logo from "./Logo";
import LogoImg from "/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderCart from "./HeaderCart";

function Header() {
  const [scrollTopData, setScrollTopData] = useState("");
  const { pathname } = useLocation();
  const headerClass =
    pathname === "/"
      ? `header black_nav clearfix element_to_stick ${scrollTopData}`
      : "header_in clearfix";

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
    <header className={headerClass}>
      <div className="container">
        <div id="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={`layer ${mobileNav ? "layer-is-visible" : ""}`}></div>
        <HeaderCart />
        <Link className="open_close" onClick={() => setMobileNav(true)}>
          <i className="icon_menu"></i>
          <span>Menu </span>
        </Link>
        <nav className={`main-menu ${mobileNav ? "show" : ""}`}>
          <div id="header_menu">
            <Link className="open_close" onClick={() => setMobileNav(false)}>
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
              <Link to="/restaurant" onClick={() => setMobileNav(false)}>
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
