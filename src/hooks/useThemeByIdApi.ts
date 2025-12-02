'use client';

import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';
import { AdminJSThemeByIdResponse, StackbyThemeByIdResponse, ThemeField } from '@/types/type';

export const useThemeByIdApi = (id: string) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(
    ['flag_adminjs'],
    ['is_test_user', 'adminjs_preference']
  );
  const { data: sessionData } = useSession();

  const [data, setData] = useState<{data: AdminJSThemeByIdResponse | StackbyThemeByIdResponse<ThemeField>} | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!flag_adminjs) return;

    if (!id) return;

    setLoading(true);
    setError(false);

    let url: string;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {} };

    const isAdminJsEnabled =
      flag_adminjs.enabled || (is_test_user && adminjs_preference);

    if (isAdminJsEnabled) {
      console.log(`Flagsmith habilitada. Chamando: /api/themes/${id}`);
      url = `/api/themes/${id}`;
    } else {
      console.log("Flagsmith desabilitada. Stackby filtrando por id");
      url = `/api/stackbyApi/Themes`;
      fetchOptions.headers = {
        operator: 'rowIds',
        value: id,
      };
    }

    fetch(url, fetchOptions)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || `Erro ${res.status} na rota ${url}`);
        }
        return res.json();
      })
      .then(data => setData(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [
    id,
    flag_adminjs.enabled,
    flag_adminjs,
    is_test_user,
    adminjs_preference,
    sessionData?.user.email,
  ]);

  return { data, loading, error};
};
