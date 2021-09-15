import { React, useState, useEffect } from "react";
import Product from "../Product";
import "./styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/products");
      const json = await response.json();
      setProducts(json.products);
    }
    fetchData();
  }, []);

  return (
    <ul className="productlist-container" type="none">
      {products &&
        products.map((product) => (
          <Product key={product.productId} {...product} />
        ))}
    </ul>
  );
};
export default ProductList;
