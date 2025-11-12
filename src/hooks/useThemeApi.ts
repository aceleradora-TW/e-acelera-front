'use client';
import { useState, useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';

export const useThemeApi = (category: string) => {
  const flagsmith = useFlagsmith();
  const { data: session } = useSession();
  const isAdminJsEnabled = flagsmith.getTrait('adminjs_enabled')

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const identifier = session?.user?.email;;
    // if (session?.user?.email) {
      // identifier = session.user.email;
    // } else {
    //   let anonymousId = localStorage.getItem('anonymous_user_id');
    //   if (!anonymousId) {
    //     anonymousId = uuidv4();
    //     localStorage.setItem('anonymous_user_id', anonymousId);
    //   }
    //   identifier = anonymousId;
    // }

    // flagsmith.identify(identifier).then(() => {

      // setError(false);
      // console.log(flagsmith.getTrait('usa_adminjs'));
      // console.log(`[useThemeApi] Trait 'usa_adminjs' é: ${isAdminJsEnabled}. Usando a rota: ${isAdminJsEnabled ? '/api/themes' : '/api/stackbyApi/Themes'}`);

      let url: string;
      const fetchOptions: RequestInit = {
        method: 'GET',
        headers: {},
      };

      if (isAdminJsEnabled) {
        url = `/api/themes`;
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
            const err = await res.json();
            throw new Error(err.error || `Request failed: ${res.status}`);
          }
          const data = await res.json();
          setData(data)
        })
        .catch(err => {
          console.error("Erro no hook useThemeApi:", err);
          setError(true);
        })
        .finally(() => setLoading(false));
  }, [category, session?.user.email]);
  return { data, loading, error };
};
