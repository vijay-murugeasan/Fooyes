import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import { getCategories } from "../../services/apiRestaurant";
import { IMG_CATEGORY_URL } from "../../utils/constant";
import Spinner from "../../ui/Spinner";
import { CategoriesSkelton } from "./skelton/Categories";

function Categories() {
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
      setCategory(data);
      setIsLoading(false);
      return data;
    }
    getCategory();
  }, []);
  // console.log("cate-load", isLoading);
  return (
    category && (
      <div className="container margin_30_60">
        <div className="main_title center">
          <span>
            <em></em>
          </span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur imperdiet deterruisset</p>
        </div>

        {isLoading && <CategoriesSkelton />}
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
                      <figure style={{ height: "180px", width: "144px" }}>
                        <span>{item.count}</span>
                        <img
                          src={IMG_CATEGORY_URL + item.imageId}
                          data-src="img/home_cat_pizza.jpg"
                          alt="category"
                          className="owl-lazy"
                        />
                      </figure>
                    </Link>
                  </div>
                );
              })}
          </OwlCarousel>
        )}
      </div>
    )
  );
}

export default Categories;
