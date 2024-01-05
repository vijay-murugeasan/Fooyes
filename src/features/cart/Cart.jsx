import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import StickyBox from "react-sticky-box";
import CartItems from "./CartItems";

function Cart({ height }) {
  const IsMobile = window.screen.width < 800;
  const [isShow, setIsShow] = useState(false);
  const style = isShow ? { zIndex: "99999" } : {};
  return (
    <div className="col-lg-4" id="sidebar_fixed" style={style}>
      {!IsMobile && (
        <StickyBox offsetTop={height} offsetBottom={20}>
          <CartItems isShow={isShow} handleShow={setIsShow} />
        </StickyBox>
      )}
      {IsMobile && <CartItems isShow={isShow} handleShow={setIsShow} />}
    </div>
  );
}

export default Cart;
