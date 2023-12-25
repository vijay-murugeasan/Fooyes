import ContactForm from "./ContactForm";
import Map from "./Map";

function DropUsLine() {
  return (
    <div className="container margin_60_20">
      <h5 className="mb_5">Drop Us a Line </h5>
      <div className="row">
        <div className="col-lg-4 col-md-6 add_bottom_25">
          <ContactForm />
        </div>
        <div className="col-lg-8 col-md-6 add_bottom_25">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default DropUsLine;
