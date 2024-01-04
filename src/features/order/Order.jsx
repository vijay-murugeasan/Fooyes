import Cart from "../cart/Cart";
import "../../assets/css/order-sign_up.css";
import OrderForm from "./OrderForm";

function Order() {
  return (
    <main className="bg_gray">
      <div className="container margin_60_20">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <OrderForm />
          </div>
          <Cart height="30" />
        </div>
      </div>
    </main>
  );
}

export default Order;
