function TypeDelivery({ handleFilterKey, filterKeyValue }) {
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

  function handleChangeRadio(data) {
    handleFilterKey(data);
  }

  return (
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
                  onChange={() => handleChangeRadio(type.filter)}
                  className={filterKeyValue === type.filter ? "selected" : ""}
                  checked={filterKeyValue === type.filter ?? "checked"}
                />
                <span className="checkmark"></span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TypeDelivery;
