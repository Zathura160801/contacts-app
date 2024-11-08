import { addContact } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addContact(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}
