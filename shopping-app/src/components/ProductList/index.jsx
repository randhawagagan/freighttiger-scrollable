import { React, useState, useEffect } from "react";
import history from "../../utils/history";

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
  <div>
  {products.map( (product) =>{
    return <div key={product.productId}>
         <button onClick={()=> history.push('/cart')} >Add to cart</button>
         {product.productId}</div>;
  })}
  </div>
  )
}
export default ProductList;