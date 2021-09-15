import { React, useEffect } from "react";
import Product from "../Product";
import "./styles.css";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";
import { loadItems } from "../../redux/actions/listActions";

const ProductList = ({ products, loadItems }) => {
  useEffect(() => {
    loadItems();
  }, []);

  console.log(products);
  const { paginatedList } = products;
  return (
    <ul className="productlist-container" type="none">
      {paginatedList &&
        paginatedList.map((product, i) => {
          return <Product key={product.productId} {...product} />;
        })}
      {/* <div ref={}></div> */}
      {/* if (i === paginatedList.length - 1) {
           // return Sentinal
          } */}
    </ul>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
const mapDispatchToProps = {
  addToCartAction,
  loadItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
