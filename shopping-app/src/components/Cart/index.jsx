import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const Cart = ({ cart }) => {
  return (
    <ul className="cart-container" type="none">
      {cart &&
        cart.map(({ price, brand, productName, gender }, index) => (
          <li key={index} className="list-item">
            <div className="meta-container">
              <span className="product_price">Rs.{price}</span>
              <span className="product_name">{brand}</span>
              <p>{productName}</p>
              <div className="extra-details">
                <span className="product_gender">Gender:{gender}</span>
                <span className="product_gender">Quantity: 1</span>
              </div>
            </div>
          </li>
        ))}
      <div className="button-container">
        <button className="addToCart">CHECKOUT</button>
      </div>
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.products.cart,
  };
}
export default connect(mapStateToProps)(Cart);
