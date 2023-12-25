import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <main className="bg_gray">
      <div id="error_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-9">
              <h1>Something went wrong 😢</h1>

              {/* <p>{error.data || error.message}</p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Error;
