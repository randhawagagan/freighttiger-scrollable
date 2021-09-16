import React from "react";
import history from "../../utils/history";
import "./styles.css";
const Product = ({
  productName,
  brand,
  price,
  gender,
  primaryColour,
  searchImage,
}) => {
  return (
    <li className="product-container">
      <img src={searchImage} alt="product" className="image-resize" />
      <div className="meta-container">
        <span className="product_price">Rs.{price}</span>
        <span className="product_name">{brand}</span>
        <p>{productName}</p>
        <div className="extra-details">
          <span className="product_gender">Gender:{gender}</span>
          <span className="product_gender">Color:{primaryColour}</span>
        </div>
        <button className="addToCart" onClick={() => history.push("/cart")}>
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default Product;
