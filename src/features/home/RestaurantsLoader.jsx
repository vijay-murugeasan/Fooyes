const figureImgRes = {
  backgroundColor: "#E5E4E2",
  width: "30%",
  paddingBottom: "25%",
};

const resCuisine = {
  backgroundColor: "#E5E4E2",
  width: "30%",
  height: "10px",
  display: "block",
};

const resName = {
  backgroundColor: "#E5E4E2",
  width: "55%",
  marginTop: "2%",
  paddingTop: "6%",
  display: "block",
};

const resArea = {
  backgroundColor: "#E5E4E2",
  width: "45%",
  marginTop: "2%",
  paddingTop: "6%",
  display: "block",
};

const resOffer = {
  backgroundColor: "#E5E4E2",
  width: "55%",
  marginTop: "8%",
  paddingTop: "6%",
  display: "block",
};
function RestaurantsLoader() {
  return (
    <>
      <div className="col-lg-6">
        <div className="list_home">
          <ul>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <div className="col-md-4">
                  <figure style={figureImgRes}></figure>
                </div>
                <div className="col-md-8">
                  <em style={resCuisine}></em>
                  <em style={resName}></em>
                  <small style={resArea}></small>
                  <span style={resOffer}></span>
                </div>
              </a>
            </li>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <figure style={figureImgRes}></figure>
                <em style={resCuisine}></em>
                <em style={resName}></em>
                <small style={resArea}></small>

                <span style={resOffer}></span>
              </a>
            </li>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <figure style={figureImgRes}></figure>
                <em style={resCuisine}></em>
                <em style={resName}></em>
                <small style={resArea}></small>

                <span style={resOffer}></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="list_home">
          <ul>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <figure style={figureImgRes}></figure>
                <em style={resCuisine}></em>
                <em style={resName}></em>
                <small style={resArea}></small>

                <span style={resOffer}></span>
              </a>
            </li>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <figure style={figureImgRes}></figure>
                <em style={resCuisine}></em>
                <em style={resName}></em>
                <small style={resArea}></small>

                <span style={resOffer}></span>
              </a>
            </li>
            <li>
              <a href="/Loader" onClick={(e) => e.preventDefault()}>
                <figure style={figureImgRes}></figure>
                <em style={resCuisine}></em>
                <em style={resName}></em>
                <small style={resArea}></small>

                <span style={resOffer}></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RestaurantsLoader;
