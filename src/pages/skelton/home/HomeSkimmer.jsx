import { Skeleton } from "@mui/material";
import Categories from "../../../features/home/skelton/Categories";
import RestaurantCard from "../../../features/home/skelton/RestaurantCard";

const HomeSkimmer = () => {
  return (
    <main>
      <div className="hero_single">
        <Skeleton variant="rectangular" height={625} />
      </div>
      <div className="container margin_30_60">
        <div className="main_title center">
          <span>
            <em></em>
          </span>
          <Skeleton variant="text" width={350} height={40} />
          <Skeleton variant="text" width={700} height={30} />
        </div>

        <Categories />
      </div>
      <div className="bg_gray">
        <div className="container margin_60_40">
          <div className="main_title">
            <span>
              <em></em>
            </span>
            <Skeleton variant="text" width={300} height={40} />
            <Skeleton variant="text" width={500} height={30} />
          </div>
          <RestaurantCard />
          <div className="banner">
            <Skeleton variant="rectangular" height={625} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSkimmer;
