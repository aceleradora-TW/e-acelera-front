import { useEffect, useState } from 'react';
import { ApiResponse } from '@/types/type';

const fetchData = async (url: string, options?: Record<string, any>): Promise<ApiResponse | undefined> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }

    const data: ApiResponse = await response.json();

    return data;
  } catch (error) {
    console.log("erro " + error);
    throw new Error(`Error: ${error}`)
  }
};

const useFetchData = (url: string, options?: Record<string, any>) => {
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataFromApi = async () => {
    setIsLoading(true);
    try {
      const result = await fetchData(url, options);
      setData(result)
      setError(undefined)
    } catch (err) {
        setError(err as Error);
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return { data, error, isLoading };
};

export default useFetchData;
