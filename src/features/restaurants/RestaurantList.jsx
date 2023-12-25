import Promo from "./Promo";
import RestaurantItem from "./RestaurantItem";
// import { RestaurantData } from "./data";

function RestaurantList({ restaurant }) {
  // console.log(restaurant);
  return (
    <div className="container margin_30_20">
      <Promo />

      <div className="row isotope-wrapper">
        {restaurant.map((item) => {
          return <RestaurantItem key={item?.info?.id} item={item?.info} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantList;
