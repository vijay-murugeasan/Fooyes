import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import { getCategories } from "../../services/apiRestaurant";
import { IMG_CDN_URL } from "../../services/constant";
import Spinner from "../../ui/Spinner";

function Categories() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  // };

  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    async function getCategory() {
      setIsLoading(true);
      const data = await getCategories();
      // console.log(data);
      setCategory(data);
      setIsLoading(false);
      return data;
    }
    getCategory();
  }, []);
  // console.log("cate-load", isLoading);
  return (
    <div className="container margin_30_60">
      <div className="main_title center">
        <span>
          <em></em>
        </span>
        <h2>Popular Categories</h2>
        <p>Cum doctus civibus efficiantur imperdiet deterruisset</p>
      </div>

      {isLoading && (
        <div className="owl-container" style={{ display: "flex", gap: "10px" }}>
          <div
            className="owl-item"
            style={{
              backgroundColor: "#E5E4E2",
              width: "25%",
              paddingBottom: "28%",
            }}
          ></div>
          <div
            className="owl-item"
            style={{
              backgroundColor: "#E5E4E2",
              width: "25%",
              paddingBottom: "28%",
            }}
          ></div>
          <div
            className="owl-item"
            style={{
              backgroundColor: "#E5E4E2",
              width: "25%",
              paddingBottom: "28%",
            }}
          ></div>
          <div
            className="owl-item"
            style={{
              backgroundColor: "#E5E4E2",
              width: "25%",
              paddingBottom: "28%",
            }}
          ></div>
          <div
            className="owl-item"
            style={{
              backgroundColor: "#E5E4E2",
              width: "25%",
              paddingBottom: "28%",
            }}
          ></div>
        </div>
      )}
      {!isLoading && (
        <OwlCarousel
          className="owl-carousel owl-theme categories_carousel"
          {...options}
          margin={4}
        >
          {category &&
            category.map((item) => {
              return (
                <div className="item_version_2" key={item.id}>
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
      )}
    </div>
  );
}

export default Categories;
