import { Fragment } from "react";
import { Skeleton } from "@mui/material";
import ItemCard from "./ItemCard";

const Restaurants = () => {
  return (
    <>
      <div className="page_header element_to_stick">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
              <Skeleton width={240} />
              <Skeleton width={100} />
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="search_bar_list">
                <Skeleton width={410} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filters_full clearfix add_bottom_15">
        <div className="container">
          <div className="type_delivery">
            <ul className="clearfix d-flex flex-row">
              <li>
                <Skeleton variant="circular" width={30} height={30} />
              </li>
              <li>
                <Skeleton variant="circular" width={30} height={30} />
              </li>
              <li>
                <Skeleton variant="circular" width={30} height={30} />
              </li>
            </ul>
          </div>
          <div className="float-end">
            <Skeleton variant="rectangular" width={40} height={40} />
          </div>
          <div className="float-end mx-2">
            <Skeleton variant="rectangular" width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="container margin_30_20">
        <div className="my-4">
          <Skeleton variant="rectangular" height={90} />
        </div>
        <div className="row">
          {/* {Array.from(new Array(8), (val, index) => { */}
          {Array(12)
            .fill(1)
            .map((val, index) => {
              return (
                <Fragment key={`${val}-${index}`}>
                  <ItemCard />
                </Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
