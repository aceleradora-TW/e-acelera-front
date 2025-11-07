// ARQUIVO: hooks/useThemeApi.ts

'use client';
import { useState, useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { v4 as uuidv4 } from 'uuid'; 
import { useSession } from 'next-auth/react'; 

export const useThemeApi = (category: string) => {
  const  { isLoading }  = useFlags(['usa_adminjs']);
  console.log(`[useThemeApi] isLoading: ${JSON.stringify(isLoading)}`);
  const flagsmith = useFlagsmith();
  const { data: session } = useSession(); 

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    let identifier: string;
    if (session?.user?.email) {
      identifier = session.user.email;
    } else {
      let anonymousId = localStorage.getItem('anonymous_user_id');
      if (!anonymousId) {
        anonymousId = uuidv4();
        localStorage.setItem('anonymous_user_id', anonymousId);
      }
      identifier = anonymousId;
    }

    flagsmith.identify(identifier).then(() => {
      setLoading(true);
      setError(false);

      const useAdminJs = flagsmith.getTrait('usa_adminjs') ?? true;

      console.log(`[useThemeApi] Trait 'usa_adminjs' é: ${useAdminJs}. Usando a rota: ${useAdminJs ? '/api/themes' : '/api/stackbyApi/Themes'}`);

      let url: string;
      const fetchOptions: RequestInit = {
        method: 'GET',
        headers: {},
      };

      if (useAdminJs) {
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
        .then(res => {
          if (!res.ok) {
            return res.json().then(err => { throw new Error(err.error || `Request failed: ${res.status}`) });
          }
          return res.json();
        })
        .then(setData)
        .catch(err => {
          console.error("Erro no hook useThemeApi:", err);
          setError(true);
        })
        .finally(() => setLoading(false));
    });

  }, [category, isLoading, flagsmith, session]);
  return { data, loading, error };
};
