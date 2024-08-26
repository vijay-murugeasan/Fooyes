import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IMG_CDN_URL } from "../../utils/constant";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../../services/redux/CartSlice";

import { formatCurrency } from "../../utils/helpers";
import ItemDetailModal from "./ItemDetailModal";

function MenuItem({ itemCards, index }) {
  const dispatch = useDispatch();
  const { id, name, price, defaultPrice, description, imageId } =
    itemCards?.card?.info;

  const itemPrice = price ? price : defaultPrice;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice: itemPrice,
      totalPrice: itemPrice * 1,
    };
    // console.log(newItem);
    dispatch(addItem(newItem));
  }

  /**Item Popup */
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
    /** category navigation sticky added using this */
    const elementProp = document.getElementById("secondary-nav");
    elementProp &&
      window.scrollY > 500 &&
      elementProp.classList.add("is_stuck");
  }

  function handleShow() {
    /** category navigation sticky removed using this */
    const elementProp = document.getElementById("secondary-nav");
    const isStuck = elementProp && elementProp.classList.contains("is_stuck");
    elementProp && isStuck && elementProp.classList.remove("is_stuck");

    setShow(true);
  }

  return (
    <>
      <tr className="col-md-12">
        <td
          className="col-md-6 item-modal"
          onClick={(e) => {
            e.preventDefault();
            handleShow();
          }}
          style={{ cursor: "pointer" }}
        >
          <figure>
            {imageId && (
              <img
                src={IMG_CDN_URL + imageId}
                alt="thumb"
                className="lazy"
                loading="lazy"
              />
            )}
            {!imageId && (
              <img
                src="/img/lazy-placeholder-100-100-white.png"
                alt="thumb"
                className="lazy"
                loading="lazy"
              />
            )}
          </figure>
          <div className="flex-md-column">
            <h4 title={`${index}. ${name}`}>{`${index}. ${name}`}</h4>
            <p title={description}>{description}</p>
          </div>
        </td>
        <td className="col-md-2">
          <strong>{itemPrice > 0 ? formatCurrency(itemPrice) : " "}</strong>
        </td>
        <td className="options col-md-4">
          <div
            className="d-flex align-item-center flex-md-row flex-column"
            style={{ gap: "15px" }}
          >
            {isInCart && (
              <div className="d-flex col-md-6 mb-2 justify-content-around">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(decreaseItemQuantity(id));
                  }}
                >
                  <i className="icon_minus_alt2"></i>
                </Link>
                <span className="px-2">{currentQuantity}</span>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(increaseItemQuantity(id));
                  }}
                >
                  <i className="icon_plus_alt2"></i>
                </Link>
              </div>
            )}
            {!isInCart && (
              <div className="col-md-6 text-center">
                <Link
                  href="/addCart"
                  className="btn_1 gradient small"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart();
                  }}
                  style={{ zIndex: 0 }}
                >
                  Add
                </Link>
              </div>
            )}
            {isInCart && (
              <div className="col-md-6 text-center">
                <Link
                  className="btn_1 outline small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteItem(id));
                  }}
                  style={{ zIndex: 0 }}
                >
                  Remove
                </Link>
              </div>
            )}
          </div>
        </td>
      </tr>
      <ItemDetailModal
        show={show}
        handleClose={handleClose}
        itemCards={itemCards}
      />
    </>
  );
}

export default MenuItem;
