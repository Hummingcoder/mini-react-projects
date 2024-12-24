import React, { useEffect, useState } from "react";
import Item from "./Item";

const LoadMore = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  async function loadData() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await res.json();

      if (result && result.products && result.products.length) {
        if (data.length === 0) {
          setData(result.products);
        } else {
          if (data[data.length - 1].id < result.products[0].id) {
            setData((prev) => [...prev, ...result.products]);
          }
        }
      }

      setLoading(false);
    } catch (error) {
      setError(error.massage);
    }
  }

  useEffect(() => {
    loadData();
    console.log(data);
  }, [count]);

  function handleLoadMore() {
    if (data.length < 100) {
      setCount((prev) => prev + 1);
      setLoading(true);
    }
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section className="min-h-screen w-full p-4">
      <div className="masonry-3-col mx-auto max-w-[1100px] w-full">
        {data.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div className="w-full h-fit min-h-[200px] flex items-center justify-center">
        {loading ? (
          <p className=" text-lg">loading...</p>
        ) : (
          <button
            className=" rounded-lg bg-blue-400 text-white px-5 py-3"
            onClick={handleLoadMore}
          >
            load more
          </button>
        )}
      </div>
    </section>
  );
};

export default LoadMore;
