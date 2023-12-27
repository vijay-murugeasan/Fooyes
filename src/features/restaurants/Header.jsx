import { useSelector } from "react-redux";

function Header({
  restaurants,
  handleRestaurantData,
  searchVal,
  setSearchVal,
}) {
  const stateAddress = useSelector((state) => state.user.address);
  const sessionAddress = JSON.parse(window.sessionStorage.getItem("address"));
  const address = sessionAddress || stateAddress;

  const addressArr = address.split(",");
  const formattedAddress = addressArr.slice(0, addressArr.length - 1).join(",");

  function handleSearchClick(e) {
    setSearchVal(e.target.value);
    const updateList = [...restaurants];
    const resData = updateList;
    if (searchVal === "") {
      handleRestaurantData(restaurants);
      return;
    }
    const filterBySearch = resData?.filter((item) =>
      item.info.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log(filterBySearch);
    handleRestaurantData(filterBySearch);
  }
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
                placeholder="Restaurants or Cuisines"
                onChange={handleSearchClick}
                value={searchVal}
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
