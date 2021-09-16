import { React, useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";
import {
  loadItems,
  loadNextPageOnScroll,
} from "../../redux/actions/listActions";
import Scrollable from "../Scrollable";

const ProductList = ({
  products,
  loadItems,
  pageNumber,
  loadNextPageOnScroll,
}) => {
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  // const { setElement, isVisible } = useVisibilityHook();

  // useEffect(() => {
  //   if (isVisible & (pageNumber < 5)) {
  //     loadNextPageOnScroll(pageNumber + 1);
  //   }
  // }, [isVisible]);

  console.log(products);
  const { list } = products;
  // const _loadNextPage = (...args) => {
  //   console.log("loadNextPage", ...args);
  //   // this.setState({ isNextPageLoading: true }, () => {
  //   setTimeout(() => {
  //     loadNextPageOnScroll();
  //     // this.setState((state) => ({
  //     //   hasNextPage: state.items.length < 100,
  //     //   isNextPageLoading: false,
  //     //   items: [...paginatedList],
  //     // }));
  //   }, 2500);
  //   // });
  // };

  return (
    <>
      <ul className="productlist-container" type="none">
        {/* {paginatedList &&
          paginatedList.map((product, index) => {
            return <Product key={product.productId} {...product} />;
          })} */}
        {list && list.length > 0 && <Scrollable data={list} />}
      </ul>

      {/* {paginatedList && paginatedList.length > 0 && (
        <ProductScrollable
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={paginatedList}
          loadNextPage={_loadNextPage}
        />
      )} */}
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
