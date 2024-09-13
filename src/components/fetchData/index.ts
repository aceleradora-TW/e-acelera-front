import { useState, useEffect, useMemo, SetStateAction } from 'react';
import { ApiResponse } from '@/types/type';

const cache = new Map<string, ApiResponse>();

const fetchData = async (url: string): Promise<ApiResponse> => {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados da API');
  }
  const data: ApiResponse = await response.json();
  
  cache.set(url, data);
  return data ;
};

const useFetchData = (url: string) => {
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData(url);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, [url]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, error, isLoading };
};

export default useFetchData;
