import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteItem,
  getCart,
  getTotalCartPrice,
} from "../../services/redux/CartSlice";
import { formatCurrency } from "../../utils/helpers";
import "../../assets/css/detail-page.css";
function CartItems({
  height,
  isShow,
  handleShow,
  isSubmitted,
  setIsSubmitted,
}) {
  const cart = useSelector(getCart);
  const { pathname } = useLocation();

  const totalCartItemPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const deliveryFee = 2000;
  const orderPath = pathname === "/order";
  const url = orderPath ? "/thank-you" : "/order";
  const orderBtnText = orderPath ? "Order Now" : "Confirm Order";
  function handleIsShow(e) {
    e.preventDefault();
    handleShow(!isShow);
  }
  return (
    <>
      <div
        className={`box_order ${!orderPath ? "mobile_fixed" : ""} sidebar ${
          isShow ? "d-block" : ""
        } `}
      >
        <div className="head">
          <h3>Order Summary</h3>
          <a
            href="/close"
            onClick={handleIsShow}
            className="close_panel_mobile"
          >
            <i className="icon_close"></i>
          </a>
        </div>
        <div className="main">
          <ul className="clearfix">
            {cart.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteItem(item.id));
                    }}
                    style={{ wordWrap: "break-word", width: "70%" }}
                  >{`${item.quantity}x ${item.name}`}</Link>
                  <span>{formatCurrency(item.totalPrice)} </span>
                </li>
              );
            })}
          </ul>
          <ul className="clearfix">
            <li>
              Subtotal <span>{formatCurrency(totalCartItemPrice)} </span>
            </li>
            <li>
              Delivery fee <span>{formatCurrency(deliveryFee)}</span>
            </li>
            <li className="total">
              Total
              <span>{formatCurrency(totalCartItemPrice + deliveryFee)} </span>
            </li>
          </ul>

          <div className="btn_1_mobile">
            {orderPath && (
              <button
                className="btn_1 gradient full-width mb_5"
                onClick={() => {
                  setIsSubmitted(true);
                }}
                // disabled={!isSubmitted}
              >
                Order Now
              </button>
            )}
            {!orderPath && (
              <Link to={url} className="btn_1 gradient full-width mb_5">
                {orderBtnText}
              </Link>
            )}
            <div className="text-center">
              <small>No money charged on this steps </small>
            </div>
          </div>
        </div>
      </div>
      {!orderPath && (
        <div className="btn_reserve_fixed">
          <Link className="btn_1 gradient full-width" onClick={handleIsShow}>
            View Basket
          </Link>
        </div>
      )}
    </>
  );
}

export default CartItems;
