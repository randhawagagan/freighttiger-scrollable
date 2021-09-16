import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "../Product";
import "./styles.css";

function Scrollable({ data }) {
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)));
    }, 100);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
    console.log(current);
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>...</h4>}
    >
      <div className="scrollable-flex">
        {current &&
          current.map((item, index) => <Product key={index} {...item} />)}
      </div>
    </InfiniteScroll>
  );
}
export default Scrollable;
