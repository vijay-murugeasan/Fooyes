import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "./CartSlice";
import HeaderCartItems from "./HeaderCartItems";
import EmptyCart from "./EmptyCart";

function HeaderCart() {
  const cart = useSelector(getCart);
  const [showCart, setShowCart] = useState(false);

  const ref = useRef();

  function handleShowCart(e) {
    e.preventDefault();
    setShowCart((showCart) => !showCart);
  }

  useEffect(() => {
    function onClose() {
      setShowCart(false);
    }

    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, []);

  return (
    <ul id="top_menu">
      <li>
        <div className="dropdown dropdown-cart" ref={ref}>
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
                width: "260px",
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
      </li>
    </ul>
  );
}

export default HeaderCart;
