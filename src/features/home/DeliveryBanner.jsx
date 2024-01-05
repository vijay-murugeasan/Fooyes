import { Link } from "react-router-dom";

function DeliveryBanner() {
  return (
    <div
      className="banner lazy"
      style={{ backgroundImage: "url(/img/banner_bg_desktop.jpg)" }}
    >
      <div
        className="wrapper d-flex align-items-center opacity-mask"
        data-opacity-mask="rgba(0, 0, 0, 0.3)"
        style={{ backgroundColor: "#0000004d" }}
      >
        <div>
          <small>FooYes Delivery </small>
          <h3>We Deliver to your home </h3>
          <p>Enjoy a tasty food few minutes!</p>
          <Link to="/restaurant" className="btn_1 gradient">
            Start Now!
          </Link>
        </div>
      </div>
      {/* /wrapper  */}
    </div>
  );
}

export default DeliveryBanner;
