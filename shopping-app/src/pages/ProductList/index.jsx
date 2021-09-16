import { React, useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { loadItems } from "../../redux/actions/listActions";
import Scrollable from "../../components/Scrollable";

const ProductList = ({ products, loadItems }) => {
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  console.log(products);
  const { list } = products;

  return (
    <>
      <ul className="productlist-container" type="none">
        {list && list.length > 0 && <Scrollable data={list} />}
      </ul>
    </>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
const mapDispatchToProps = {
  loadItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
