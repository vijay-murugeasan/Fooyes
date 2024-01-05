import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const pageIncludes = ["/home", "/contact"];
  return (
    <footer>
      <div
        className={`wave footer  ${
          !pageIncludes.includes(pathname) ? "gray" : ""
        }`}
      ></div>
      <div className="container margin_60_40 fix_mobile">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>© 2023 FooYes </h3>

            <h3 data-bs-target="#collapse_1">Legal</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <a href="help.html">Terms and Conditions </a>
                </li>
                <li>
                  <a href="contacts.html">Privacy </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_1">Quick Links</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <a href="help.html">Help </a>
                </li>
                <li>
                  <a href="contacts.html">Contacts </a>
                </li>
              </ul>
            </div>
            <h3 data-bs-target="#collapse_2">Categories</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_2">
              <ul>
                <li>
                  <a href="listing-map.html">Top Categories </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_3">Contacts</h3>
            <div className="collapse dont-collapse-sm contacts" id="collapse_3">
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
            <h3 data-bs-target="#collapse_4">Keep in touch</h3>
            <div className="collapse dont-collapse-sm" id="collapse_4">
              <div id="newsletter">
                <div id="message-newsletter"></div>
                <form
                  method="post"
                  action="assets/newsletter.php"
                  name="newsletter_form"
                  id="newsletter_form"
                >
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
                    <button type="submit" id="submit-newsletter">
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
        {/* <!-- /row--> */}
        <hr />
        {/* <div className="row add_bottom_25">
          <div className="col-lg-6">
            <ul className="footer-selector clearfix">
              <li>
                <div className="styled-select lang-selector">
                  <select>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="styled-select currency-selector">
                  <select name="currency">
                    <option value="US Dollars">US Dollars</option>
                    <option value="Euro">Euro</option>
                  </select>
                </div>
              </li>
              <li>
                <img
                  src="/img/cards_all.svg"
                  data-src="img/cards_all.svg"
                  alt=""
                  width="230"
                  height="35"
                  className="lazy"
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li>
                <a href="#0">Terms and conditions </a>
              </li>
              <li>
                <a href="#0">Privacy </a>
              </li>
              <li>
                <span>© FooYes </span>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
