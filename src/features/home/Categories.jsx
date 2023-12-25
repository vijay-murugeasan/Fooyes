// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const categories = [
  {
    id: 1,
    name: "Pizza",
    AveragePrice: 40,
    img: "/img/home_cat_pizza.jpg",
    count: 98,
  },
  {
    id: 2,
    name: "Japanese",
    AveragePrice: 50,
    img: "/img/home_cat_sushi.jpg",
    count: 87,
  },
  {
    id: 3,
    name: "Burghers",
    AveragePrice: 55,
    img: "/img/home_cat_hamburgher.jpg",
    count: 55,
  },
  {
    id: 4,
    name: "Vegetarian",
    AveragePrice: 40,
    img: "/img/home_cat_vegetarian.jpg",
    count: 55,
  },
  {
    id: 5,
    name: "Bakery",
    AveragePrice: 60,
    img: "/img/home_cat_bakery.jpg",
    count: 60,
  },
  {
    id: 6,
    name: "Chinese",
    AveragePrice: 40,
    img: "/img/home_cat_chinesse.jpg",
    count: 25,
  },
  {
    id: 7,
    name: "Mexican",
    AveragePrice: 30,
    img: "/img/home_cat_mexican.jpg",
    count: 35,
  },
];

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
  return (
    <div className="container margin_30_60">
      <div className="main_title center">
        <span>
          <em></em>
        </span>
        <h2>Popular Categories</h2>
        <p>Cum doctus civibus efficiantur __ imperdiet deterruisset</p>
      </div>

      {/* <Slider {...settings}>
        {categories.map((item) => {
          return (
            <div className="item_version_2" key={item.id}>
              <a href="#">
                <figure>
                  <span>{item.count}</span>
                  <img
                    src={item.img}
                    data-src="img/home_cat_pizza.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <small>Avg price ${item.AveragePrice} </small>
                  </div>
                </figure>
              </a>
            </div>
          );
        })}
      </Slider> */}

      <OwlCarousel
        className="owl-carousel owl-theme categories_carousel"
        {...options}
        margin={4}
      >
        {categories.map((item) => {
          return (
            <div className="item_version_2" key={item.id}>
              <a href="#">
                <figure>
                  <span>{item.count}</span>
                  <img
                    src={item.img}
                    data-src="img/home_cat_pizza.jpg"
                    alt=""
                    className="owl-lazy"
                    width="350"
                    height="450"
                  />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <small>Avg price ${item.AveragePrice} </small>
                  </div>
                </figure>
              </a>
            </div>
          );
        })}
      </OwlCarousel>
      {/* /main_title  */}
      <div className="owl-carousel owl-theme categories_carousel">
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>98 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_pizza.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Pizza</h3>
                <small>Avg price $40 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>87 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_sushi.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Japanese</h3>
                <small>Avg price $50 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>55 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_hamburgher.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Burghers</h3>
                <small>Avg price $55 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>55 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_vegetarian.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Vegetarian</h3>
                <small>Avg price $40 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>65 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_bakery.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Bakery</h3>
                <small>Avg price $60 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>25 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_chinesse.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Chinese</h3>
                <small>Avg price $40 </small>
              </div>
            </figure>
          </a>
        </div>
        <div className="item_version_2">
          <a href="grid-listing-filterscol.html">
            <figure>
              <span>35 </span>
              <img
                src="img/home_cat_placeholder.jpg"
                data-src="img/home_cat_mexican.jpg"
                alt=""
                className="owl-lazy"
                width="350"
                height="450"
              />
              <div className="info">
                <h3>Mexican</h3>
                <small>Avg price $35 </small>
              </div>
            </figure>
          </a>
        </div>
      </div>
      {/* /carousel  */}
    </div>
  );
}

export default Categories;
