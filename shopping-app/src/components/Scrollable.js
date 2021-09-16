import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "./Product";

function Scrollable({ data }) {
  // const data = new Array(1000).fill().map((value, id) => ({
  //   id: id,
  //   title: faker.lorem.words(5),
  //   body: faker.lorem.sentences(8),
  // }));

  const [count, setCount] = useState({
    prev: 0,
    next: 5,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 5, count.next + 5)));
    }, 1000);
    setCount((prevState) => ({
      prev: prevState.prev + 5,
      next: prevState.next + 5,
    }));
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {/* <div> */}
      {current &&
        current.map((item, index) => (
          <Product key={item.productId} {...item} />
        ))}
      {/* </div> */}
    </InfiniteScroll>
  );
}
export default Scrollable;
