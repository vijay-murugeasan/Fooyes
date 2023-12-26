import { useLocation } from "react-router-dom";
import "../assets/css/error.css";

function PageNotFound() {
  const { pathname } = useLocation();
  const path = pathname.replace("/", "");
  return (
    <main className="bg_gray">
      <div id="error_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <figure>
                <img
                  src="img/404.svg"
                  alt=""
                  className="img-fluid"
                  width="550"
                  height="234"
                />
              </figure>
              <p>
                We are sorry, but the {path} you were looking for doesn't exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
