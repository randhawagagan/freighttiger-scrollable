import { React, useEffect } from "react";
import Product from "../Product";
import "./styles.css";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";
import {
  loadItems,
  loadNextPageOnScroll,
} from "../../redux/actions/listActions";
import { useVisibilityHook } from "react-observer-api";

const ProductList = ({
  products,
  loadItems,
  pageNumber,
  loadNextPageOnScroll,
}) => {
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const { setElement, isVisible } = useVisibilityHook();

  useEffect(() => {
    if (isVisible & (pageNumber < 5)) {
      loadNextPageOnScroll(pageNumber + 1);
    }
  }, [isVisible]);

  console.log(products);
  const { paginatedList } = products;
  const currentlistLength = paginatedList.length;
  return (
    <>
      <ul className="productlist-container" type="none">
        {paginatedList &&
          paginatedList.map((product, index) => {
            return <Product key={product.productId} {...product} />;
          })}
      </ul>
      <div ref={setElement}>
        {isVisible && <h1>Fetching more list items...</h1>}
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products,
    pageNumber: state.products.page,
  };
}
const mapDispatchToProps = {
  addToCartAction,
  loadItems,
  loadNextPageOnScroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
