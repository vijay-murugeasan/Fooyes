import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../services/constant";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../../services/redux/CartSlice";
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

  return (
    <tr className="col-md-12">
      <td className="col-md-6">
        <figure>
          <a
            href="/img/menu_item_large_1.jpg"
            title="Photo title"
            data-effect="mfp-zoom-in"
          >
            {imageId && (
              <img src={IMG_CDN_URL + imageId} alt="thumb" className="lazy" />
            )}
            {!imageId && (
              <img
                src="/img/lazy-placeholder-100-100-white.png"
                alt="thumb"
                className="lazy"
              />
            )}
          </a>
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
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(decreaseItemQuantity(id));
                }}
              >
                <i className="icon_minus_alt2"></i>
              </a>
              <span className="px-2">{currentQuantity}</span>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(increaseItemQuantity(id));
                }}
              >
                <i className="icon_plus_alt2"></i>
              </a>
            </div>
          )}
          {!isInCart && (
            <div className="col-md-6 text-center">
              <a
                href="/addCart"
                className="btn_1 gradient small"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart();
                }}
                style={{ zIndex: 0 }}
              >
                Add
              </a>
            </div>
          )}
          {isInCart && (
            <div className="col-md-6 text-center">
              <a
                href="#/"
                className="btn_1 outline small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteItem(id));
                }}
              >
                Remove
              </a>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default MenuItem;
