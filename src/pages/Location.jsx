import "../assets/css/order-sign_up.css";

import AutoCompleteLocation from "./AutoCompleteLocation";
function Location() {
  return (
    <div id="register_bg">
      <div id="register">
        <aside>
          <figure>
            <a href="/">
              <img src="/img/logo_sticky.svg" width="140" height="35" alt="" />
            </a>
          </figure>
          <div className="access_social">
            <h3>Order food from favourite restaurants near you.</h3>
          </div>
          <div className="divider"></div>

          <AutoCompleteLocation></AutoCompleteLocation>

          <h5>POPULAR CITIES IN INDIA</h5>
          <p>
            Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad, Kolkata,
            Mumbai, Pune & more.
          </p>
          <div className="copy">© 2024 FooYes </div>
        </aside>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  const errors = {};
  if (!data.address) errors.address = "Enter Your Delivery Location";

  if (Object.keys(errors).length > 0) return errors;

  return null;
}

export default Location;
