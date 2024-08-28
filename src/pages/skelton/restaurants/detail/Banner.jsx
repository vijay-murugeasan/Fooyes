import { Skeleton } from "@mui/material";

const Banner = () => {
  return (
    <div className="hero_in detail_page background-image ">
      <div className="wrapper opacity-mask">
        <div className="container">
          <div className="main_info my-3">
            <div className="head d-flex flex-row">
              <Skeleton variant="rectangular" width={60} height={40} />
              <div className="d-flex flex-column px-2">
                <Skeleton variant="text" width={60} height={20} />
                <Skeleton variant="text" width={80} height={20} />
              </div>
            </div>
            <Skeleton variant="text" width={700} height={55} />
            <Skeleton variant="text" width={600} height={40} />
            <Skeleton variant="text" width={200} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
