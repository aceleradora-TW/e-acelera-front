'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';

export const useThemeApi = (category: string) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const {data: sessionData} = useSession();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!flag_adminjs) {
      setLoading(true);
      return;
    }

    setLoading(true);
    setError(false);

    let url: string;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {},
    };
    if (flag_adminjs.enabled || (is_test_user && adminjs_preference)) {
      url = `/api/themes`;
      fetchOptions.headers = {
        'category': category,
      };
    } else {
      url = `/api/stackbyApi/Themes`;
      fetchOptions.headers = {
        'operator': 'equal',
        'column': 'category',
        'value': category,
      };
    }

    fetch(url, fetchOptions)
      .then(async res => {
        if (!res.ok) {
          return res.json().then(err => {
            throw new Error(err.error || `A requisição para ${url} falhou: ${res.status}`);
          });
        }
        return await res.json();
      })
      .then(setData)
      .catch(err => {
        console.error("Erro no hook useThemeApi:", err);
        setError(true);
      })
      .finally(() => setLoading(false));

  }, [sessionData?.user.email, category, flag_adminjs.enabled, flag_adminjs, is_test_user, adminjs_preference]);

  return { data, loading, error };
};
