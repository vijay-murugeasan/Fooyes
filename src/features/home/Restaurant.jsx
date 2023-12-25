// import PlaceHolder from "../../assets/img/location_list_placeholder.png";

import { Link } from "react-router-dom";

function Restaurant(items) {
  const { offer, rating, name, price, address, category, img } = items.item;

  return (
    <li>
      <Link to="/restaurants">
        <figure>
          <img src={img} alt="" className="lazy" width="350" height="233" />
        </figure>
        {rating && (
          <div className="score">
            <strong>{rating} </strong>
          </div>
        )}
        {category && <em>{category} </em>}
        {name && <h3>{name}</h3>}
        {address && <small>{address} </small>}
        <ul>
          <li>
            <span className="ribbon off">{`-${offer}%`} </span>
          </li>
          {/* <li>${price}</li> */}
          <li>{`Average price $ ${price}`}</li>
        </ul>
      </Link>
    </li>
  );
}

export default Restaurant;
