import { Skeleton } from "@mui/material";

const ItemCard = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
      <div className="strip">
        <figure>
          <Skeleton variant="rectangular" height={190} />
        </figure>
        <ul className="d-flex justify-content-between">
          <li className="d-flex justify-content-around gap-2">
            <Skeleton width={60} height={20} />
            <Skeleton width={50} height={20} />
          </li>
          <li className="float-end py-2">
            <Skeleton width={40} height={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
