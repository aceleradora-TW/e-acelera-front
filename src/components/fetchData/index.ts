import { useState, useEffect } from 'react';
import { ApiResponse } from '@/types/type';

const useFetchData = (url: string) => {
  const [data, setData] = useState<ApiResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const parseData: ApiResponse = await response.json();
        setData(parseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetchData;
