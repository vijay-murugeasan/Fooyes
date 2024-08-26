// import lazyPlaceHolder100 from "../../assets/img/lazy-placeholder-100-100-white.png";
import { Link } from "react-router-dom";
import How1 from "/img/how_1.svg";
import How2 from "/img/how_2.svg";
import How3 from "/img/how_3.svg";

function StartOrder() {
  return (
    <div className="shape_element_2">
      <div className="container margin_60_0">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="box_how">
                  <figure>
                    <img
                      src={How1}
                      alt=""
                      width="150"
                      height="167"
                      className="lazy"
                    />
                  </figure>
                  <h3>Easly Order</h3>
                  <p>
                    Order in for yourself or for the group, with no restrictions
                    on order value
                  </p>
                </div>
                <div className="box_how">
                  <figure>
                    <img
                      src={How2}
                      alt=""
                      width="130"
                      height="145"
                      className="lazy"
                    />
                  </figure>
                  <h3>Quick Delivery</h3>
                  <p>
                    Experience Fooyes's superfast delivery for food delivered
                    fresh & on time
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="box_how">
                  <figure>
                    <img
                      src={How3}
                      alt=""
                      width="150"
                      height="132"
                      className="lazy"
                    />
                  </figure>
                  <h3>Enjoy Food</h3>
                  <p>
                    Morbi convallis bibendum urna viverra. Maecenas quis
                    consequat , a feugiat eros.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center mt-3 d-block d-lg-none">
              <Link
                to="/restaurants"
                className="btn_1 medium gradient pulse_bt mt-2"
              >
                Start Order
              </Link>
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1 align-self-center">
            <div className="intro_txt">
              <div className="main_title">
                <span>
                  <em></em>
                </span>
                <h2>Start Ordering Now</h2>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit , consectetur adipiscing elit. Sed libero
                id nisi euismod, porta est consectetur deserunt.
              </p>
              <p>
                Duis aute irure dolor reprehenderit in voluptate velit cillum
                dolore eu fugiat pariatur.
              </p>
              <p>
                <Link
                  to="/restaurants"
                  className="btn_1 medium gradient pulse_bt mt-2"
                >
                  Start Order
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartOrder;
