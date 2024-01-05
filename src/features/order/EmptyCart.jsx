import { Link } from "react-router-dom";
import "../../assets/css/error.css";

function EmptyCart() {
  return (
    <main className="bg_gray">
      <div id="error_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <figure>
                <img
                  src="img/emptyCart.png"
                  alt=""
                  className="img-fluid"
                  style={{ height: "300px" }}
                />
              </figure>
              <h3>Your Cart is Empty</h3>
              <p>You can go to Restaurant page to view more restaurants</p>
              <Link to="/restaurant" className="btn_1 gradient medium">
                Restaurant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EmptyCart;
