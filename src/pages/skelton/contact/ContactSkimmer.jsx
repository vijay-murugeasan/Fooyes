import { Skeleton } from "@mui/material";
import { ContactBox } from "./ContactBox";

const ContactSkimmer = () => {
  return (
    <main>
      <div className="hero_single inner_pages background-image d-flex justify-content-center align-items-center flex-column">
        <Skeleton variant="text" width={400} height={65} />
        <Skeleton variant="text" width={700} height={40} />
      </div>
      <ContactBox />
      <div className="container margin_60_20">
        <Skeleton variant="text" width={170} height={40} className="mb_5" />
        <div className="row">
          <div className="col-lg-4 col-md-6 add_bottom_25">
            <Skeleton variant="rectangular"  height={411} />
          </div>
          <div className="col-lg-8 col-md-6 add_bottom_25">
            <Skeleton variant="rectangular"  height={411} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSkimmer;
