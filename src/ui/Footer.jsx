import { useState } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const pageIncludes = ["/home", "/", "/contact"];

  const [collapseOne, setCollapseOne] = useState(true);
  const [collapseTwo, setCollapseTwo] = useState(true);
  const [collapseThree, setCollapseThree] = useState(true);
  const [collapseFour, setCollapseFour] = useState(true);
  const IsMobile = window.screen.width < 800;
  return (
    <footer>
      <div
        className={`wave footer  ${
          pageIncludes.includes(pathname) ? "" : "gray"
        }`}
      ></div>
      <div className="container margin_60_40 fix_mobile">
        <div className="row">
          <div
            className={`col-lg-3 col-md-6 ${IsMobile ? "d-none" : "d-block"}`}
          >
            <h3>© 2023 FooYes </h3>

            <h3 data-bs-target="#collapse_1">Legal</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <span>Privacy</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3
              data-bs-target="#collapse_1"
              className={`${collapseOne ? "collapsed" : "opened"}`}
              onClick={() => setCollapseOne(!collapseOne)}
            >
              Quick Links
            </h3>
            <div
              className={` collapse dont-collapse-sm links ${
                !collapseOne ? "show" : ""
              }`}
              id="collapse_1"
            >
              <ul>
                <li>
                  <a href="/contact">Contacts </a>
                </li>
              </ul>
            </div>
            <h3
              data-bs-target="#collapse_2"
              className={`${collapseTwo ? "collapsed" : "opened"}`}
              onClick={() => setCollapseTwo(!collapseTwo)}
            >
              Categories
            </h3>
            <div
              className={` collapse dont-collapse-sm links ${
                !collapseTwo ? "show" : ""
              }`}
              id="collapse_2"
            >
              <ul>
                <li>
                  <a href="/restaurants">Top Categories </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3
              data-bs-target="#collapse_3"
              className={`${collapseThree ? "collapsed" : "opened"}`}
              onClick={() => setCollapseThree(!collapseThree)}
            >
              Contacts
            </h3>
            <div
              className={` collapse dont-collapse-sm contacts ${
                !collapseThree ? "show" : ""
              }`}
              id="collapse_3"
            >
              <ul>
                <li>
                  <i className="icon_house_alt"></i>97845 Baker st. 567 <br />
                  Los Angeles - US
                </li>
                <li>
                  <i className="icon_mobile"></i>+94 423-23-221
                </li>
                <li>
                  <i className="icon_mail_alt"></i>
                  <a href="#0">info@domain.com </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3
              data-bs-target="#collapse_4"
              className={`${collapseFour ? "collapsed" : "opened"}`}
              onClick={() => setCollapseFour(!collapseFour)}
            >
              Keep in touch
            </h3>
            <div
              className={` collapse dont-collapse-sm links ${
                !collapseFour ? "show" : ""
              }`}
              id="collapse_4"
            >
              <div id="newsletter">
                <div id="message-newsletter"></div>
                <form method="post" name="newsletter_form" id="newsletter_form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      id="email_newsletter"
                      className="form-control"
                      placeholder="Your email"
                      value=""
                      readOnly
                    />
                    <button type="submit" id="submit-newsletter" disabled>
                      <i className="arrow_carrot-right"></i>
                    </button>
                  </div>
                </form>
              </div>

              {/* <div className="follow_us">
                <h5>Follow Us</h5>
                <ul>
                  <li>
                    <a href="#0">
                      <img
                        src="/img/twitter_icon.svg"
                        alt=""
                        className="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="/img/facebook_icon.svg"
                        alt=""
                        className="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="/img/instagram_icon.svg"
                        alt=""
                        className="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="/img/youtube_icon.svg"
                        alt=""
                        className="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr />
        <div className={`row add_bottom_25 ${IsMobile ? "show" : "d-none"}`}>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li>
                <span>Terms and conditions </span>
              </li>
              <li>
                <span>Privacy </span>
              </li>
              <li>
                <span>© 2024 FooYes </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
