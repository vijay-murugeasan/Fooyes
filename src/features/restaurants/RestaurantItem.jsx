import { IMG_CDN_URL } from "../../services/constant";

import { Link } from "react-router-dom";

function RestaurantItem({ item }) {
  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    locality,
    avgRatingString,
    sla,
    veg,
  } = item;
  const deliveryTime = sla?.slaString;
  const foodType = veg ? "veg" : "nonVeg";
  const cuisineCategory = cuisines.join(" ").replace(" ", "-").toLowerCase();

  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-4 col-sm-4 isotope-item ${id} ${foodType} ${cuisineCategory}`}
    >
      <div className="strip">
        <figure>
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            className="img-fluid lazy"
            alt=""
          />
          <Link to={`/restaurant/${id}`} className="strip_info">
            {/* <small>{avgRating} </small> */}
            <div className="item_title">
              <h3>{name}</h3>
              <small>{locality} </small>
            </div>
          </Link>
        </figure>
        <ul>
          <li>
            {!deliveryTime && <span>Delivery Not Available</span>}
            {deliveryTime && <span className="deliv yes">{deliveryTime} </span>}
          </li>
          <li>
            <div className="score">
              <strong>{avgRatingString} </strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RestaurantItem;
