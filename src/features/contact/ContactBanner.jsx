function ContactBanner() {
  return (
    <div
      className="hero_single inner_pages background-image"
      style={{ backgroundImage: "url(/img/home_section_2.jpg)" }}
    >
      <div
        className="opacity-mask"
        data-opacity-mask="rgba(0, 0, 0, 0.6)"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-md-8">
              <h1>Contact FooYes </h1>
              <p>A successful restaurant experience </p>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
      </div>
      <div className="wave gray hero"></div>
    </div>
  );
}

export default ContactBanner;
