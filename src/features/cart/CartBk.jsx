import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCart, getTotalCartPrice } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function Cart({ height }) {
  //   const [sidebarWidth, setSidebarWidth] = useState(undefined);
  //   const [sidebarTop, setSidebarTop] = useState(undefined);

  //   useEffect(() => {
  //     const sidebarEl = document
  //       .querySelector(".sidebar")
  //       .getBoundingClientRect();
  //     setSidebarWidth(sidebarEl.width);
  //     setSidebarTop(sidebarEl.top);
  //     console.log(sidebarEl);
  //   }, []);

  //   useEffect(() => {
  //     if (!sidebarTop) return;

  //     window.addEventListener("scroll", isSticky);
  //     return () => {
  //       window.removeEventListener("scroll", isSticky);
  //     };
  //   }, [sidebarTop]);

  //   const isSticky = (e) => {
  //     const sidebarEl = document.querySelector(".sidebar");
  //     const scrollTop = window.scrollY;
  //     if (scrollTop >= sidebarTop - 10) {
  //       sidebarEl.classList.add("is-sticky");
  //     } else {
  //       sidebarEl.classList.remove("is-sticky");
  //     }
  //   };

  useEffect(() => {
    const container = document
      .querySelector(".list_menu")
      .getBoundingClientRect();
    console.log(container);
  });
  const cart = useSelector(getCart);
  const totalCartItemPrice = useSelector(getTotalCartPrice);
  //   console.log(cart);
  const dispatch = useDispatch();
  const deliveryFee = 2000;

  const [scrollTopData, setScrollTopData] = useState({});

  useEffect(() => {
    const cartStick = {
      position: "fixed",
      transform: "translateY(90px)",
      top: `10px`,
      width: "28.8%",
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY < 500) {
        setScrollTopData({});
      } else {
        setScrollTopData(cartStick);
      }
    });
  }, [height]);

  //   function sticky_relocate() {
  //     var window_top = $(window).scrollTop();
  //     var footer_top = $("#footer").offset().top;
  //     var div_top = $("#sticky-anchor").offset().top;
  //     var div_height = $("#sticky").height();

  //     var padding = 20; // tweak here or get from margins etc

  //     if (window_top + div_height > footer_top - padding)
  //       $("#sticky").css({
  //         top: (window_top + div_height - footer_top + padding) * -1,
  //       });
  //     else if (window_top > div_top) {
  //       $("#sticky").addClass("stick");
  //       $("#sticky").css({ top: 0 });
  //     } else {
  //       $("#sticky").removeClass("stick");
  //     }
  //   }

  //   $(function () {
  //     $(window).scroll(sticky_relocate);
  //     sticky_relocate();
  //   });

  //   console.log(scrollTopData);

  return (
    <div className="col-lg-4" id="sidebar_fixed">
      <div className={`box_order mobile_fixed sidebar `} style={scrollTopData}>
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
                <li>
                  <a
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteItem(item.id));
                    }}
                    style={{ wordWrap: "break-word", width: "70%" }}
                  >{`${item.quantity}x ${item.name}`}</a>
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
              Confirm Order
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
    </div>
  );
}

export default Cart;
