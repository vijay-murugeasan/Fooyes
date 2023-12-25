import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { getCategories, getRestaurants } from "../../services/apiRestaurant";
import { IMG_CDN_URL } from "../../services/constant";
import { Link } from "react-router-dom";

function Categories() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  // };

  const options = {
    loop: true,
    nav: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  };

  const [category, setCategory] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function getCategory() {
      const data = await getCategories();
      setCategory(data);
      return data;
    }
    async function getRes() {
      const data = await getRestaurants();
      setRestaurants(data);
      return data;
    }

    getCategory();
    getRes();
  }, []);

  return (
    <div className="container margin_30_60">
      <div className="main_title center">
        <span>
          <em></em>
        </span>
        <h2>Popular Categories</h2>
        <p>Cum doctus civibus efficiantur imperdiet deterruisset</p>
      </div>

      <OwlCarousel
        className="owl-carousel owl-theme categories_carousel"
        {...options}
        margin={4}
      >
        {category.map((item) => {
          return (
            <div
              className="item_version_2"
              style={{ padding: "10px" }}
              key={item.id}
            >
              <Link onClick={(e) => e.preventDefault()}>
                <figure style={{ border: "2px solid" }}>
                  <span>{item.count}</span>
                  <img
                    src={IMG_CDN_URL + item.imageId}
                    data-src="img/home_cat_pizza.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                </figure>
              </Link>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Categories;
