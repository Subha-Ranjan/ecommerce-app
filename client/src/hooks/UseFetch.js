import { useState } from "react";
import { makeRequest } from "../MakeRequest";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //before requesting Set Loading=true
        setLoading(true);
        const res = await makeRequest.get(
          url,
          //   process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log("data", res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log("Error", error);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
