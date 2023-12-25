function Banner() {
  return (
    <div className="hero_single version_1">
      <div className="opacity-mask">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <h1>Delivery or Takeaway Food</h1>
              <p>The best restaurants at ___ best price</p>
              <div method="post">
                <div className="row g-0 custom-search-input">
                  <div className="col-lg-10">
                    <div className="form-group">
                      <input
                        className="form-control no_border_r"
                        type="text"
                        id="autocomplete"
                        placeholder="Address, neighborhood..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <button className="btn_1 gradient" type="submit">
                      Search
                    </button>
                  </div>
                </div>
                <div className="search_trends">
                  <h5>Trending:</h5>
                  <ul>
                    <li>
                      <a href="#0">Sushi </a>
                    </li>
                    <li>
                      <a href="#0">Burgher </a>
                    </li>
                    <li>
                      <a href="#0">Chinese </a>
                    </li>
                    <li>
                      <a href="#0">Pizza </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave hero"></div>
    </div>
  );
}

export default Banner;
