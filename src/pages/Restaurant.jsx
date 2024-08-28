import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { UseRestaurant } from "../services/apiRestaurant";
import { getCart } from "../services/redux/CartSlice";

import SpinnerFullPage from "../ui/SpinnerFullPage";
import Banner from "../features/restaurant/Banner";
import MenuNav from "../features/restaurant/MenuNav";
import MenuList from "../features/restaurant/MenuList";
import Cart from "../features/cart/Cart";
import RestaurantsSkelton from "./skelton/restaurants/detail/RestaurantDetail";
import "../assets/css/detail-page.css";

export default function Restaurant() {
  const { id } = useParams();
  const cart = useSelector(getCart);
  const [restaurant, menuItems] = UseRestaurant(id);
  const [height, setHeight] = useState(null);
  if (!restaurant) return <RestaurantsSkelton />;
  
  return (
    <main>
      <Banner restaurant={restaurant} />
      <MenuNav item={menuItems} handleHeight={setHeight} height={height} />
      <div className="bg_gray">
        <div className="container margin_detail">
          <div className="row">
            <div className="col-lg-8 list_menu">
              {menuItems.map((item, index) => {
                return (
                  <MenuList menuItems={item} key={item.title} index={index} />
                );
              })}
            </div>
            {cart.length > 0 && <Cart height={height} />}
          </div>
        </div>
      </div>
    </main>
  );
}
