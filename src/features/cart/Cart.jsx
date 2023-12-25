import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StickyBox from "react-sticky-box";

import { deleteItem, getCart, getTotalCartPrice } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function Cart({ height }) {
  const cart = useSelector(getCart);
  const { pathname } = useLocation();

  const totalCartItemPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const deliveryFee = 2000;
  const orderBtnText = pathname === "/order" ? "Order Now" : "Confirm Order";
  return (
    <div className="col-lg-4" id="sidebar_fixed">
      <StickyBox offsetTop={height} offsetBottom={20}>
        <div className={`box_order mobile_fixed sidebar `}>
          <div className="head">
            <h3>Order Summary</h3>
            <a href="#0" className="close_panel_mobile">
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
                Total{" "}
                <span>{formatCurrency(totalCartItemPrice + deliveryFee)} </span>
              </li>
            </ul>

            <div className="btn_1_mobile">
              <Link to="/order" className="btn_1 gradient full-width mb_5">
                {orderBtnText}
              </Link>
              <div className="text-center">
                <small>No money charged on this steps </small>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_reserve_fixed">
          <a href="#0" className="btn_1 gradient full-width">
            View Basket{" "}
          </a>
        </div>
      </StickyBox>
    </div>
  );
}

export default Cart;
