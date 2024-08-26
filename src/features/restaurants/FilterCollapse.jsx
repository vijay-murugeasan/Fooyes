import { Collapse } from "react-bootstrap";

function FilterCollapse({ open, category, handleChange }) {
  // console.log(category.length);
  // console.log(new Set(category));
  const firstGrid = category?.slice(0, 15);
  const secondGrid = category?.slice(15, 30);
  const thirdGrid = category?.slice(30, category.length);
  return (
    <Collapse in={open}>
      <div className="filters_2" id="collapseFilters">
        <div className="container margin_30_20">
          <div className="row">
            <div className="filter_type">
              <h6>Categories</h6>
              {category?.length && (
                <div className="col-md-12 d-flex flex-row">
                  <div className="col-md-4">
                    <ul>
                      {firstGrid.map((item) => {
                        const cuisineName = item
                          .toLowerCase()
                          .replaceAll(" ", "");
                        return (
                          <li key={cuisineName}>
                            <label className="container_check">
                              {item.toUpperCase().replace("-", " ")}{" "}
                              <small> </small>
                              <input
                                type="checkbox"
                                value={cuisineName}
                                onChange={handleChange}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      {secondGrid.map((item) => {
                        const cuisineName = item
                          .toLowerCase()
                          .replaceAll(" ", "");
                        return (
                          <li key={cuisineName}>
                            <label className="container_check">
                              {item.toUpperCase().replace("-", " ")}{" "}
                              <small> </small>
                              <input
                                type="checkbox"
                                value={cuisineName}
                                onChange={handleChange}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      {thirdGrid.map((item) => {
                        const cuisineName = item
                          .toLowerCase()
                          .replaceAll(" ", "");
                        return (
                          <li key={cuisineName}>
                            <label className="container_check">
                              {item.toUpperCase().replace("-", " ")}{" "}
                              <small> </small>
                              <input
                                type="checkbox"
                                value={cuisineName}
                                onChange={handleChange}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Collapse>
  );
}

export default FilterCollapse;
