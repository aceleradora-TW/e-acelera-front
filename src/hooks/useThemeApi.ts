'use client';

import { useEffect, useState } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';
import { ApiResponse, DatabaseThemesResponse } from '@/types/type';

type ThemeApiResponse = ApiResponse | DatabaseThemesResponse;

function traitIsTrue(value: unknown): boolean {
  return (
    value === true ||
    value === 'true' ||
    value === 1 ||
    value === '1'
  );
}

export function useThemeApi(category: string) {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(
    ['flag_adminjs'],
    ['is_test_user', 'adminjs_preference']
  );

  const { data: sessionData } = useSession();

  const [data, setData] = useState<ThemeApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const isTestUser = traitIsTrue(is_test_user);
    const useAdminJs =
      flag_adminjs?.enabled === true ||
      (isTestUser && traitIsTrue(adminjs_preference));

    console.log('useThemeApi:', {
      flagAdminJs: flag_adminjs?.enabled,
      isTestUser,
      adminjsPreference: adminjs_preference,
      useAdminJs,
    });

    let url: string;

    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {},
    };

    if (useAdminJs) {
      const params = new URLSearchParams({
        category,
        limit: '100',
      });

      url = `/api/themes?${params.toString()}`;

      console.log('Chamando CMS/Postgres:', url);
    } else {
      url = '/api/stackbyApi/Themes';

      fetchOptions.headers = {
        operator: 'equal',
        column: 'category',
        value: category,
      };

      console.log('Chamando Stackby:', url);
    }

    fetch(url, fetchOptions)
      .then(async (response) => {
        if (!response.ok) {
          const responseError = await response.json().catch(() => null);

          throw new Error(
            responseError?.error ||
              `A requisição para ${url} falhou: ${response.status}`
          );
        }

        return response.json();
      })
      .then((apiData: ThemeApiResponse) => {
        console.log('Dados recebidos em useThemeApi:', apiData);
        setData(apiData);
      })
      .catch((requestError) => {
        console.error('Erro no hook useThemeApi:', requestError);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    sessionData?.user?.email,
    category,
    flag_adminjs?.enabled,
    is_test_user,
    adminjs_preference,
  ]);

  return { data, loading, error };
}