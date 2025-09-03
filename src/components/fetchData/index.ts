import { useEffect, useState } from 'react';
import { ApiResponse } from '@/types/type';

const cache = new Map<string, ApiResponse>();

const fetchData = async (url: string, options?: Record<string, any>): Promise<ApiResponse | undefined> => {
  try {
    const cachedData = cache.get(url)

  if (cachedData) return cachedData

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API');
  }
  const data: ApiResponse = await response.json();
  cache.set(url, data);
  return data ;
  } catch (error) {
    console.log("erro " + error);
    return undefined
  }
};

const useFetchData = (url: string, options?: Record<string, any>) => {
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData(url, options);
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
  }, [url, options]);

  return { data, error, isLoading };
};

export default useFetchData;
