import { Skeleton } from "@mui/material";

const ListMenu = () => {
  return (
    <div className="bg_gray vh-100">
      <div className="container margin_detail">
        <div className="row">
          <div className="col-lg-8 list_menu">
            {Array.from(new Array(3), (val, index) => {
              return (
                <section id={`section-${index + 1}`} key={`${val}-${index}`}>
                  <Skeleton
                    variant="text"
                    width={200}
                    height={50}
                    className="mb-3"
                  />
                  <div className="table_wrapper">
                    <Skeleton variant="rectangular" height={450} />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
