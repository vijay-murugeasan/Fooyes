import { Collapse } from "react-bootstrap";

function FilterCollapse({ open, category, handleChange }) {
  return (
    <Collapse in={open}>
      <div className="filters_2" id="collapseFilters">
        <div className="container margin_30_20">
          <div className="row">
            <div className="col-md-4">
              <div className="filter_type">
                <h6>Categories</h6>
                <ul>
                  {category.map((item) => {
                    const cuisineName = item.toLowerCase().replaceAll(" ", "");
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
          </div>
        </div>
      </div>
    </Collapse>
  );
}

export default FilterCollapse;
