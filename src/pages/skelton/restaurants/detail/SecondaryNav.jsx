import { Skeleton } from "@mui/material";

function SecondaryNav() {
  return (
    <div className="secondary_nav sticky_horizontal">
      <div className="container">
        <ul id="secondary_nav">
          {Array.from(new Array(7), (val, index) => {
            return (
              <li key={`${val}-${index}`}>
                <Skeleton
                  variant="text"
                  width={90}
                  height={30}
                  className="position-relative"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SecondaryNav;
