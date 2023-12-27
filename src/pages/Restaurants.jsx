import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getRestaurants } from "../services/apiRestaurant";

import Header from "../features/restaurants/Header";
import TypeDelivery from "../features/restaurants/TypeDelivery";
import FilterCollapse from "../features/restaurants/FilterCollapse";
import RestaurantList from "../features/restaurants/RestaurantList";
import Loader from "../ui/Loader";

import "../assets/css/listing.css";
// import { Collapse } from "react-bootstrap";

export default function Restaurants() {
  const restaurant = useLoaderData();

  const [isoTope, setIsoTope] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [filterKey, setFilterKey] = useState("*");
  const [cuisineKey, setCuisineKey] = useState([]);
  const [open, setOpen] = useState(false);

  const [restaurantData, setRestaurantData] = useState(restaurant || {});
  const [searchVal, setSearchVal] = useState("");
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
      if (filterKey) {
        filterKey === "*"
          ? isoTope.arrange({ filter: `*` })
          : isoTope.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [isoTope, filterKey]);

  useEffect(() => {
    const cuisines = cuisineKey.map((item) => `.${item}`).join(", ");
    if (isoTope) {
      if (cuisineKey) {
        cuisineKey.length === 0
          ? isoTope.arrange({ filter: `*` })
          : isoTope.arrange({ filter: cuisines });
      }
    }
  }, [isoTope, cuisineKey]);

  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getCategory() {
      setIsLoading(true);
      let filter = [];
      const data = restaurant;

      const filterData = data.map((item) => {
        return [
          ...filter,
          item.info.cuisines
            .join(" ")
            .replace(" ", "-")
            .toLowerCase()
            .split(" "),
        ];
      });
      const newItem = filterData.flat(3);
      const removeDuplicate = newItem.filter(
        (item, index) => newItem.indexOf(item) === index
      );

      setCategory(removeDuplicate);
      setIsLoading(false);
      return data;
    }
    getCategory();
  }, [restaurant]);
  function handleChange(e) {
    const value = e.target.value;
    if (cuisineKey.includes(value)) {
      const newItem = cuisineKey.filter((item) => item !== e.target.value);
      return setCuisineKey([...newItem]);
    }
    setCuisineKey([...cuisineKey, e.target.value]);
  }
  const renderData = searchVal === "" ? restaurant : restaurantData;
  if (!restaurant) return "something went Wrong";

  return restaurant?.length === 0 ? (
    <Loader />
  ) : (
    <main>
      <Header
        restaurants={restaurant}
        handleRestaurantData={setRestaurantData}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
      />
      <TypeDelivery
        handleFilterKey={setFilterKey}
        filterKeyValue={filterKey}
        setOpen={setOpen}
        open={open}
      />
      <FilterCollapse
        open={open}
        handleChange={handleChange}
        category={category}
      />
      <RestaurantList restaurant={renderData} />
    </main>
  );
}
export async function loader() {
  const result = await getRestaurants();

  return result;
}
