import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../../services/apiRestaurant";
import DeliveryBanner from "./DeliveryBanner";
import Spinner from "../../ui/Spinner";
import Restaurant from "./Restaurant";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(position);
  useEffect(() => {
    async function getRes() {
      setIsLoading(true);
      const data = await getRestaurants();
      // console.log(data);
      setRestaurants(data);
      setIsLoading(false);
      return data;
    }

    getRes();
  }, []);

  // console.log(restaurants);
  return (
    <div className="bg_gray">
      <div className="container margin_60_40">
        <div className="main_title">
          <span>
            <em></em>
          </span>
          <h2>Top Rated Restaurants</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          <Link to="/restaurants">View All &rarr;</Link>
        </div>
        <div className="row add_bottom_25">
          {isLoading && <Spinner />}
          {!isLoading && (
            <div className="col-lg-6">
              <div className="list_home">
                <ul>
                  {restaurants.length > 0 &&
                    restaurants
                      .slice(0, 3)
                      .map((items) => (
                        <Restaurant item={items} key={items.info.id} />
                      ))}
                </ul>
              </div>
            </div>
          )}
          {!isLoading && (
            <div className="col-lg-6">
              <div className="list_home">
                <ul>
                  {restaurants.length > 0 &&
                    restaurants
                      .slice(3, 6)
                      .map((items) => (
                        <Restaurant item={items} key={items.info.id} />
                      ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <DeliveryBanner />
      </div>
    </div>
  );
}

export default Restaurants;
