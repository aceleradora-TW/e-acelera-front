import { useCallback, useEffect, useState } from 'react';
import { IdType } from '@/types/type';

interface ProgressData {
  [themeId: string]: number | undefined;
}

const useFetchBulkProgress = (ids: string[], idType: IdType) => {
  const [progress, setProgress] = useState<ProgressData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const idsParam = ids.join(','); // Join IDs into a comma-separated string
      const url = `/api/backend/getProgress?ids=${idsParam}&idType=${idType}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch progress: ${response.status}`);
      }

      const data = await response.json();
      setProgress(data.status);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [ids, idType]);

  useEffect(() => {
    if (ids.length > 0) {
      fetchProgress();
    } else {
      setIsLoading(false);
    }
  }, [fetchProgress, ids]);

  return { progress, isLoading, error };
};

export default useFetchBulkProgress;