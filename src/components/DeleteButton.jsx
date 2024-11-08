import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      <FiDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
