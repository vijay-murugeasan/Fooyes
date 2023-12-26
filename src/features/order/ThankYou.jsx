import "../../assets/css/order-sign_up.css";

function ThankYou() {
  return (
    <main className="bg_gray">
      <div className="container margin_60_40">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="box_order_form">
              {/* <div className="head text-center">
                <h3>Pizzeria da Alfredo</h3>
                27 Old Gloucester St, 4530 -
                <a
                  href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                  target="blank"
                >
                  Get directions
                </a>
              </div> */}
              <div className="main">
                <div id="confirm">
                  <div className="icon icon--order-success svg add_bottom_15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                    >
                      <g fill="none" stroke="#8EC343" strokeWidth="2">
                        <circle
                          cx="36"
                          cy="36"
                          r="35"
                          style={{
                            strokeDasharray: "240px 240px",
                            strokeDashoffset: "480px",
                          }}
                        ></circle>
                        <path
                          d="M17.417,37.778l9.93,9.909l25.444-25.393"
                          style={{
                            strokeDasharray: "50px 50px",
                            strokeDashoffset: "0px",
                          }}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Order Confirmed!</h3>
                  <p>Thank You For Ordering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ThankYou;
