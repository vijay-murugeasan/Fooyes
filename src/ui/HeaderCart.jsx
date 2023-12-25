import ThumbPlaceHolder from "/img/menu-thumb-placeholder.jpg";
import MenuThumb from "/img/menu-thumb-1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  getCart,
  getTotalCartPrice,
} from "../features/cart/CartSlice";
import { formatCurrency } from "../utils/helpers";

function HeaderCart() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(getCart);
  const totalCartItemPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  function handleShowCart() {
    setShowCart((showCart) => !showCart);
  }
  return (
    <ul id="top_menu">
      <li>
        <div className="dropdown dropdown-cart">
          <Link
            className={`cart_bt ${showCart && "show"}`}
            onClick={handleShowCart}
          >
            {cart.length && <strong>{cart.length} </strong>}
          </Link>
          {showCart && (
            <div
              className={`dropdown-menu ${showCart && "show"}`}
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                margin: "0px",
                transform: "translate3d(-210px, 30.4px, 0px)",
              }}
            >
              <ul>
                {cart.map((item) => {
                  return (
                    <li key={item.id} style={{ paddingLeft: "15px" }}>
                      <strong>
                        <span>{`${item.quantity}x ${item.name}`} </span>
                        {formatCurrency(item.totalPrice)}
                      </strong>
                      <Link
                        className="action"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(deleteItem(item.id));
                        }}
                      >
                        <i className="icon_trash_alt"></i>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="total_drop">
                <div className="clearfix add_bottom_15">
                  <strong>Total </strong>
                  <span>{formatCurrency(totalCartItemPrice)} </span>
                </div>
                <Link
                  to="/order"
                  className="btn_1 outline"
                  onClick={() => setShowCart(false)}
                >
                  View Cart
                </Link>
                <Link
                  to="/order"
                  className="btn_1"
                  onClick={() => setShowCart(false)}
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* dropdown-cart */}
      </li>
    </ul>
  );
}

export default HeaderCart;
