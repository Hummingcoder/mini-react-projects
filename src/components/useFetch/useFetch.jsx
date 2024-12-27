import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(url, { ...options });

      const res_data = await res.json();

      setData(res_data);

      setLoading(false);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, err, loading];
};

export default useFetch;
