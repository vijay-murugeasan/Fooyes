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
                    Credit Card
                    <input
                      type="radio"
                      value=""
                      checked=""
                      name="payment_method"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <i className="icon_creditcard"></i>
                </div>
                <div className="form-group">
                  <label>Name on card </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name_card_order"
                    name="name_card_order"
                    placeholder="First and last name"
                  />
                </div>
                <div className="form-group">
                  <label>Card number </label>
                  <input
                    type="text"
                    id="card_number"
                    name="card_number"
                    className="form-control"
                    placeholder="Card number"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Expiration date </label>
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="expire_month"
                            name="expire_month"
                            className="form-control"
                            placeholder="mm"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="expire_year"
                            name="expire_year"
                            className="form-control"
                            placeholder="yyyy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Security code </label>
                      <div className="row">
                        <div className="col-md-4 col-6">
                          <div className="form-group">
                            <input
                              type="text"
                              id="ccv"
                              name="ccv"
                              className="form-control"
                              placeholder="CCV"
                            />
                          </div>
                        </div>
                        <div className="col-md-8 col-6">
                          <img
                            src="img/icon_ccv.gif"
                            width="50"
                            height="29"
                            alt="ccv"
                          />
                          <small>Last 3 digits </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment_select" id="paypal">
                  <label className="container_radio">
                    Pay with Paypal
                    <input type="radio" value="" name="payment_method" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="payment_select">
                  <label className="container_radio">
                    Pay with Cash
                    <input type="radio" value="" name="payment_method" />
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
