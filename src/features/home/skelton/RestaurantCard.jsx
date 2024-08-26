import { Skeleton } from "@mui/material";

export const RestaurantCard = () => {
  return (
    <div className="row add_bottom_25">
      <div className="col-lg-6">
        <div className="list_home">
          <ul>
            {Array.from(new Array(3), (val, index) => {
              return (
                <li key={`${val}-${index}`}>
                  <a href="home">
                    <figure>
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={150}
                      />
                    </figure>
                    <div className="score">
                      <Skeleton variant="text" width={25} height={25} />
                    </div>
                    <em>
                      <Skeleton variant="text" width={50} height={15} />
                    </em>
                    <h3>
                      <Skeleton variant="text" width={70} height={20} />
                    </h3>
                    <small>
                      <Skeleton variant="text" width={150} height={15} />
                    </small>
                    <ul>
                      <li>
                        <Skeleton variant="text" width={63} height={20} />
                      </li>
                      <li>
                        <Skeleton variant="text" width={109} height={17} />
                      </li>
                    </ul>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="list_home">
          <ul>
            {Array.from(new Array(3), (val, index) => {
              return (
                <li key={`${val}-${index}`}>
                  <a href="home">
                    <figure>
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={150}
                      />
                    </figure>
                    <div className="score">
                      <Skeleton variant="text" width={25} height={25} />
                    </div>
                    <em>
                      <Skeleton variant="text" width={50} height={15} />
                    </em>
                    <h3>
                      <Skeleton variant="text" width={70} height={20} />
                    </h3>
                    <small>
                      <Skeleton variant="text" width={150} height={15} />
                    </small>
                    <ul>
                      <li>
                        <Skeleton variant="text" width={63} height={20} />
                      </li>
                      <li>
                        <Skeleton variant="text" width={109} height={17} />
                      </li>
                    </ul>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
