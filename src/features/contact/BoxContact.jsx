const contactData = [
  {
    title: "Help Center",
    icon: "icon_lifesaver",
    phone: "+94 423-23-221",
    email: "help@fooyes.com",
    timing: "MON to FRI 9am-6pm to 9am-2pm",
  },
  {
    title: "Address",
    icon: "icon_pin_alt",
    phone: "",
    address: "6th Floor, Capital Towers,Nungambakkam, Chennai - 600006 IND ",
    email: "",
    timing: "MON to FRI 9am-6pm to 9am-2pm",
  },
  {
    title: "Submissions",
    icon: "icon_cloud-upload_alt",
    phone: "+94 423-23-221",
    email: "order@fooyes.com",
    timing: "MON to FRI 9am-6pm to 9am-2pm",
  },
];
function BoxContact() {
  return (
    <div className="bg_gray">
      <div className="container margin_60_40">
        <div className="row justify-content-center">
          {contactData.map((item) => {
            return (
              <div className="col-lg-4" key={item.title}>
                <div className="box_contacts">
                  <i className={item.icon}></i>
                  <h2>{item.title} </h2>
                  {item.address && <div>{item.address}</div>}
                  {item.phone && <a href="/">{item.phone} </a>}
                  {item.email && <a href="/"> {item.email} </a>}
                  <small>{item.timing} </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BoxContact;
