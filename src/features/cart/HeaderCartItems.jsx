import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem, getTotalCartPrice } from "../../services/redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function HeaderCartItems({ cart, setShowCart }) {
  const totalCartItemPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id} style={{ paddingLeft: "15px" }}>
              <strong>
                <span>{`${item.quantity}x ${item.name}`} </span>
                {formatCurrency(item.totalPrice)}
              </strong>
              <a
                href="/deleteItem"
                className="action"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteItem(item.id));
                }}
              >
                <i className="icon_trash_alt"></i>
              </a>
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
        <Link to="/order" className="btn_1" onClick={() => setShowCart(false)}>
          Checkout
        </Link>
      </div>
    </>
  );
}

export default HeaderCartItems;
