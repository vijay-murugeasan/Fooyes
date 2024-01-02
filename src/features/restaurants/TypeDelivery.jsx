function TypeDelivery({ handleFilterKey, filterKeyValue, setOpen, open }) {
  const types = [
    {
      title: "All",
      value: "all",
      filter: "*",
    },
    {
      title: "Pure Veg",
      value: "veg",
      filter: "veg",
    },
    {
      title: "Non Veg",
      value: "nonVeg",
      filter: "nonVeg",
    },
  ];

  function handleFilterChange(e) {
    handleFilterKey(e.target.value);
  }
  return (
    <div className="filters_full clearfix add_bottom_15">
      <div className="container">
        <div className="type_delivery">
          <ul className="clearfix">
            {types.map((type) => {
              return (
                <li key={type.title}>
                  <label className="container_radio">
                    {type.title}
                    <input
                      type="radio"
                      name="type_d"
                      value={type.value}
                      id={type.value}
                      onChange={handleFilterChange}
                      className={
                        filterKeyValue === type.filter ? "selected" : ""
                      }
                      checked={filterKeyValue === type.filter ?? "checked"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <a
          href="#collapseFilters"
          onClick={(e) => {
            setOpen(!open);
            e.preventDefault();
          }}
          className="btn_filters"
          aria-expanded={open}
          aria-controls="collapseFilters"
        >
          <i className="icon_adjust-vert"></i>
          <span>Filters </span>
        </a>
      </div>
    </div>
  );
}

export default TypeDelivery;
