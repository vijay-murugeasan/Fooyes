// import PlaceHolder from "../../assets/img/location_list_placeholder.png";

import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../services/constant";

function Restaurant({ item }) {
  const {
    id,
    cloudinaryImageId,
    areaName,
    avgRatingString,
    aggregatedDiscountInfoV3,
    name,
    cuisines,
    sla,
  } = item.info;

  return (
    <li>
      <Link to={`/restaurant/${id}`}>
        <figure>
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt=""
            className="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </figure>
        {avgRatingString && (
          <div className="score">
            <strong>{avgRatingString} </strong>
          </div>
        )}
        {cuisines && <em>{cuisines[0]} </em>}
        {name && <h3 className="h3-text-overflow">{name}</h3>}
        {areaName && <small>{areaName} </small>}
        <ul>
          <li>
            {aggregatedDiscountInfoV3 && (
              <span className="ribbon off">
                {aggregatedDiscountInfoV3.header +
                  " " +
                  aggregatedDiscountInfoV3.subHeader}
              </span>
            )}
          </li>
          <li>{sla.slaString}</li>
        </ul>
      </Link>
    </li>
  );
}

export default Restaurant;
