import Cart from "../cart/Cart";
import "../../assets/css/order-sign_up.css";

function Order() {
  return (
    <main className="bg_gray">
      <div className="container margin_60_20">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="box_order_form">
              <div className="head">
                <div className="title">
                  <h3>Personal Details</h3>
                </div>
              </div>
              <div className="main">
                <div className="form-group">
                  <label>First and Last Name </label>
                  <input
                    className="form-control"
                    placeholder="First and Last Name"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email Address </label>
                      <input
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone </label>
                      <input className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Full Address </label>
                  <input className="form-control" placeholder="Full Address" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>City </label>
                      <input className="form-control" placeholder="City" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Postal Code </label>
                      <input className="form-control" placeholder="0123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box_order_form">
              <div className="head">
                <div className="title">
                  <h3>Payment Method</h3>
                </div>
              </div>
              <div className="main">
                <div className="payment_select">
                  <label className="container_radio">
                    Pay with Cash
                    <input
                      type="radio"
                      value=""
                      defaultChecked
                      name="payment_method"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <i className="icon_wallet"></i>
                </div>
              </div>
            </div>
          </div>
          <Cart height="30" />
        </div>
      </div>
    </main>
  );
}

export default Order;
