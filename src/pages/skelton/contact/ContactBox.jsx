import { Skeleton } from "@mui/material";

export const ContactBox = () => {
  return (
    <div className="bg_gray">
      <div className="container margin_60_40">
        <div className="row justify-content-center">
          {Array.from(new Array(3), (val, index) => {
            return (
              <div className="col-lg-4" key={`${val}-${index}`}>
                <Skeleton variant="rectangular" height={215} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
