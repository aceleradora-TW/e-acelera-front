import { useCallback, useEffect, useState } from 'react';
import { Theme } from '@/types/typeTopic';

interface UseFetchThemesProps {
  themeType?: string;
}

const useFetchThemes = ({ themeType }: UseFetchThemesProps = {}) => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [themeIds, setThemeIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchThemes = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    let url = `/api/themes`;
    if (themeType) {
      url += `?themeType=${themeType}`;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch themes: ${response.status}`);
      }

      const data = await response.json();
      const themesData = data.data || [];
      const ids = themesData.map((theme: Theme) => theme.id);
      setThemeIds(ids);
      setThemes(themesData);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [themeType]);

  useEffect(() => {
    fetchThemes();
  }, [fetchThemes]);

  return { themes, themeIds, isLoading, error };
};

export default useFetchThemes;