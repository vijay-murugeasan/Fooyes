import { Link } from "react-router-dom";
import DeliveryBanner from "./DeliveryBanner";
import Restaurant from "./Restaurant";

const data = {
  Restaurants: [
    {
      id: 1,
      name: "La Monnalisa",
      rating: "9.5",
      category: "Italian",
      address: "8 Patriot Square E2 9NF",
      price: "35",
      offer: "30",
      img: "/img/location_list_1.jpg",
    },
    {
      id: 2,
      name: "Alliance",
      rating: "8",
      category: "Mexican",
      address: "27 Old Gloucester St, 4563",
      price: "30",
      offer: "40",
      img: "/img/location_list_2.jpg",
    },
    {
      id: 3,
      name: "Sushi Gold",
      rating: "9",
      category: "Sushi - Japanese",
      address: "Old Shire Ln EN9 3NF",
      price: "20",
      offer: "25",
      img: "/img/location_list_3.jpg",
    },
    {
      id: 4,
      name: "Mr. Pepper",
      rating: "9.5",
      category: "Vegetarian",
      address: "27 Old Gloucester St, 4563",
      price: "20",
      offer: "30",
      img: "/img/location_list_4.jpg",
    },
    {
      id: 5,
      name: "Dragon Tower",
      rating: "8",
      category: "Chinese",
      address: "22 Hertsmere Rd E14 4RX",
      price: "35",
      offer: "50",
      img: "/img/location_list_5.jpg",
    },
    {
      id: 6,
      name: "Bella Napoli",
      rating: "8.5",
      category: "Pizza - Italian",
      address: "135 Newtownards Road BT4",
      price: "25",
      offer: "45",
      img: "/img/location_list_6.jpg",
    },
  ],
};

function Restaurants() {
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
          <div className="col-lg-6">
            <div className="list_home">
              <ul>
                {data.Restaurants.length > 0 &&
                  data.Restaurants.slice(0, 3).map((items) => (
                    <Restaurant item={items} key={items.id} />
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list_home">
              <ul>
                {data.Restaurants.length > 0 &&
                  data.Restaurants.slice(3, 6).map((items) => (
                    <Restaurant item={items} key={items.id} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <DeliveryBanner />
      </div>
    </div>
  );
}

export default Restaurants;
