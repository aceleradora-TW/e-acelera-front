import { useState, useEffect, useMemo } from 'react';
import { ApiResponse } from '@/types/type';

const cache = new Map<string, ApiResponse>();

const fetchData = async (url: string): Promise<ApiResponse | undefined> => {
  try {
    const cachedData = cache.get(url)
 
  if (cachedData) return cachedData

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API');
  }
  const data: ApiResponse = await response.json();
  cache.set(url, data);
  return data ;
  } catch (error) {
    console.log("Erro " + error)
    return undefined
  }
  
};

const useFetchData = (url: string) => {
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData(url);
        if (isSubscribed) {
          setData(result)
          setError(undefined)
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err as Error);
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    fetchDataFromApi();
    return () => {
      isSubscribed = false
    };
  }, [url]);

  return { data: data, error, isLoading };
};

export default useFetchData;
