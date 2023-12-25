import { useSelector } from "react-redux";

function Header() {
  const address = useSelector((state) => state.user.address);
  const addressArr = address.split(",");
  const formattedAddress = addressArr.slice(0, addressArr.length - 2).join(",");
  return (
    <div className="page_header element_to_stick">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
            <h1>{formattedAddress}</h1>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-5">
            <div className="search_bar_list">
              <input
                type="text"
                className="form-control"
                placeholder="Dishes, restaurants or cuisines"
              />
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
