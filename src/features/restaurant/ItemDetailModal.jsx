import Modal from "react-bootstrap/Modal";
import { IMG_thumb_CDN_URL } from "../../utils/constant";
import { formatCurrency } from "../../utils/helpers";

function ItemDetailModal({ show, handleClose, itemCards }) {
  const { name, price, defaultPrice, description, imageId } =
    itemCards?.card?.info;
  const itemPrice = price ? price : defaultPrice;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#f6f6f6" }}>
        <Modal.Title>
          <b>Item Details</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="content pb-1">
        <figure>
          {imageId && (
            <img
              src={IMG_thumb_CDN_URL + imageId}
              alt="itemImage"
              className="img-fluid"
            />
          )}
          {!imageId && (
            <img src="/img/lazy-placeholder.png" alt="thumb" className="lazy" />
          )}
        </figure>
        <h6 className="mb-1">
          <b>Name</b>
        </h6>
        <p>{name}</p>
        <h6 className="mb-1">
          <b>Description</b>
        </h6>
        <p>{description}</p>
        <h6 className="mb-1">
          <b>Price</b>
        </h6>
        <p>{formatCurrency(itemPrice)}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ItemDetailModal;
