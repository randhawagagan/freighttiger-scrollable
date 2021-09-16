import { React } from "react";
import history from "../../utils/history";
import "./styles.css";
import * as CONSTANTS from "../../utils/constants";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/listActions";

const Product = (props) => {
  const {
    productName,
    brand,
    price,

    primaryColour,
    searchImage,
    addToCartAction,
  } = props;

  const handleCartClick = (event) => {
    event.preventDefault();
    history.push(CONSTANTS.CART_ROUTE);
    addToCartAction(props);
  };

  return (
    <li className="product-container">
      <img
        src={searchImage}
        alt="product"
        className="image-resize"
        loading="lazy"
      />
      <div className="meta-container">
        <span className="product_price">Rs.{price}</span>
        <span className="product_name">{brand}</span>
        <p>{productName}</p>
        <div className="extra-details">
          {/* <span className="product_gender">Gender:{gender}</span> */}
          <span className="product_gender">
            Color:
            <span style={{ color: { primaryColour } }}>{primaryColour}</span>
          </span>
        </div>
      </div>
      <div className="button-container">
        <button className="addToCart" onClick={handleCartClick}>
          Add to cart
        </button>
      </div>
    </li>
  );
};
function mapStateToProps(state) {
  return {
    cart: state.products.cart,
  };
}
const mapDispatchToProps = {
  addToCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
