import { Skeleton } from "@mui/material";

const LocationSkimmer = () => {
  return (
    <div id="register_bg">
      <div id="register">
        <aside>
          <figure className="d-flex justify-content-center">
            <Skeleton variant="rectangular" width={140} height={45} />
          </figure>
          <div className="access_social">
            <Skeleton variant="text" width={480} height={40} />
            <Skeleton variant="text" width={60} height={40} />
          </div>
          <div className="divider"></div>
          <Skeleton variant="rectangular" width={420} height={30} />
          <div id="pass-info" className="clearfix"></div>
          <Skeleton variant="rectangular" height={30} />
          <div className="mb-5"></div>

          <Skeleton variant="text" width={250} height={25} className="mb-1" />
          <Skeleton variant="text" height={21} />
          <Skeleton variant="text" width={50} height={21} />
        </aside>
      </div>
    </div>
  );
};

export default LocationSkimmer;
