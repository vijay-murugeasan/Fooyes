function Banner({ restaurant }) {
  const {
    avgRatingString,
    totalRatingsString,
    labels,
    name,
    locality,
    areaName,
    city,
  } = restaurant;
  return (
    <div
      className="hero_in detail_page background-image"
      style={{ backgroundImage: "url(/img/hero_general_2.jpg)" }}
    >
      <div
        className="wrapper opacity-mask"
        data-opacity-mask="rgba(0, 0, 0, 0.5)"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container">
          <div className="main_info">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="head">
                  <div className="score">
                    <span>
                      Superb <em>{totalRatingsString} </em>
                    </span>
                    <strong>{avgRatingString} </strong>
                  </div>
                </div>
                <h1>{name}</h1>
                {`${locality},${areaName},${city}`} -
                <a
                  href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                  target="blank"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
