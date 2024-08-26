import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <main className="bg_gray">
      <div id="error_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <h1>We'll be back shortly 😢</h1>
              <p>
                We are fixing a temporary glitch. Sorry for the inconvenience.
              </p>
              <Link to="/" />
              {/* <p>{error.data || error.message}</p> */}
              {/* <p>{error}</p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Error;
