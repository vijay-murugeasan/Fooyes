import Cart from "../cart/Cart";
import "../../assets/css/order-sign_up.css";
import OrderForm from "./OrderForm";
import { useState } from "react";

function Order() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("order", isSubmitted);
  return (
    <main className="bg_gray">
      <div className="container margin_60_20">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <OrderForm
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
            />
          </div>
          <Cart
            height="30"
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          />
        </div>
      </div>
    </main>
  );
}

export default Order;
