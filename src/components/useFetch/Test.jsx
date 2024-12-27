import React from "react";
import useFetch from "./useFetch";

const Test = () => {
  const [data, err, loading] = useFetch("https://dummyjson.com/products", {});

  return (
    <section className="text-center w-full min-h-[50vh] p-4 bg-slate-900 text-white">
      <h1 className="text-2xl mb-4 font-bold text-blue-500">
        useFetch custom hook
      </h1>

      <div className="w-full max-h-[400px] overflow-x-scroll">
        {err ? <p>{err}</p> : null}

        {loading ? <p>loading...</p> : null}
        {data && data.products && data.products.length
          ? data.products.map((prd) => (
              <p className="mb-3" key={prd.id}>
                {prd.title}
              </p>
            ))
          : null}
      </div>
    </section>
  );
};

export default Test;
