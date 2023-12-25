import ThumbPlaceHolder from "/img/menu-thumb-placeholder.jpg";
import MenuThumb from "/img/menu-thumb-1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCart, getTotalCartPrice } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";
import HeaderCartItems from "./HeaderCartItems";
import EmptyCart from "./EmptyCart";

function HeaderCart() {
  const cart = useSelector(getCart);
  const [showCart, setShowCart] = useState(false);
  const totalCartItemPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  function handleShowCart(e) {
    e.preventDefault();
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
              {cart.length > 0 && (
                <HeaderCartItems cart={cart} setShowCart={setShowCart} />
              )}
              {cart.length === 0 && (
                <EmptyCart cart={cart} setShowCart={setShowCart} />
              )}
            </div>
          )}
        </div>
        {/* dropdown-cart */}
      </li>
    </ul>
  );
}

export default HeaderCart;
