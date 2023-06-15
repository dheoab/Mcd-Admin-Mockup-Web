import { useEffect, useState } from "react";

const useFetchData = (API) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API);
      const responseJSON = await response.json();

      setData(responseJSON);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchData;
