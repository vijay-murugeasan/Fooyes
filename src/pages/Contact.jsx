import "../assets/css/contacts.css";
import BoxContact from "../features/contact/BoxContact";
import ContactBanner from "../features/contact/ContactBanner";
import DropUsLine from "../features/contact/DropUsLine";

function Contact() {
  return (
    <main>
      <ContactBanner />
      <BoxContact />
      <DropUsLine />
    </main>
  );
}

export default Contact;
