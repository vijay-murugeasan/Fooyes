import { Skeleton } from "@mui/material";

export const CategoriesSkelton = () => {
  return (
    <div className="owl-container" style={{ display: "flex", gap: "10px" }}>
      {Array.from(new Array(7), (val, index) => {
        return (
          <Skeleton
            key={`${val}-${index}`}
            variant="rectangular"
            className="owl-item"
            width="15%"
            // height="10px"
            style={{ paddingBottom: "20%" }}
          />
        );
      })}
    </div>
  );
};
