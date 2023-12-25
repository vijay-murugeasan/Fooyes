import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Collapse } from "react-bootstrap";

import { getRestaurants } from "../services/apiRestaurant";

import Header from "../features/restaurants/Header";
import RestaurantList from "../features/restaurants/RestaurantList";
import TypeDelivery from "../features/restaurants/TypeDelivery";

import Loader from "../ui/Loader";
import "../assets/css/listing.css";
// import { Collapse } from "react-bootstrap";

export default function Restaurants() {
  const restaurant = useLoaderData();

  const [isoTope, setIsoTope] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [filterKey, setFilterKey] = useState("*");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsoTope(
      // eslint-disable-next-line no-undef
      new Isotope(".isotope-wrapper", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      })
    );
  }, []);
  useEffect(() => {
    if (isoTope) {
      filterKey === "*"
        ? isoTope.arrange({ filter: `*` })
        : isoTope.arrange({ filter: `.${filterKey}` });
    }
  }, [isoTope, filterKey]);

  if (!restaurant) return "something went Wrong";

  return restaurant?.length === 0 ? (
    <Loader />
  ) : (
    <main>
      <Header />
      <div className="filters_full clearfix add_bottom_15">
        <div className="container">
          <TypeDelivery
            handleFilterKey={setFilterKey}
            filterKeyValue={filterKey}
          />
          <a
            href="#collapseFilters"
            onClick={(e) => {
              setOpen(!open);
              e.preventDefault();
            }}
            className="btn_filters"
            aria-expanded={open}
            aria-controls="collapseFilters"
          >
            <i className="icon_adjust-vert"></i>
            <span>Filters </span>
          </a>
        </div>
      </div>
      <Collapse in={open}>
        <div className="filters_2" id="collapseFilters">
          <div className="container margin_30_20">
            <div className="row">
              <div className="col-md-4">
                <div className="filter_type">
                  <h6>Categories</h6>
                  <ul>
                    <li>
                      <label className="container_check">
                        Pizza - Italian <small>12 </small>
                        <input
                          type="checkbox"
                          value="Pizza"
                          onChange={() => setFilterKey("Pizza")}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Japanese - Sushi <small>24 </small>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Burghers <small>23 </small>
                        <input type="checkbox" value="Burghers" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container_check">
                        Vegetarian <small>11 </small>
                        <input type="checkbox" value="Vegetarian" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      <RestaurantList restaurant={restaurant} />
    </main>
  );
}
export async function loader() {
  const result = await getRestaurants();

  return result;
}
