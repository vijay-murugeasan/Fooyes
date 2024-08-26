import { Link } from "react-router-dom";

function EmptyCart({ cart, setShowCart }) {
  return (
    <div className="total_drop">
      <p className="text-center">No Items In this Cart</p>
      <Link
        to="/restaurants"
        className="btn_1 outline"
        onClick={() => setShowCart(false)}
      >
        Restaurant
      </Link>
    </div>
  );
}

export default EmptyCart;
