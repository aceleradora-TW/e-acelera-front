'use client';
import { useState, useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { useSession } from 'next-auth/react';

export const useThemeApi = (category: string) => {
  const flagsmith = useFlagsmith();
  const { data: session } = useSession();
  const { flag_adminjs } = useFlags(['flag_adminjs']);
  
  // Verifica se o usuário é de teste
  const isTestUser = flagsmith.getTrait('is_test_user') === true;
  
  // Para usuários de teste: verifica a preferência salva (trait adminjs_preference)
  // Para usuários normais: usa o valor padrão da feature flag
  const adminJsPreference = flagsmith.getTrait('adminjs_preference');
  const shouldUseAdminJs = isTestUser 
    ? (adminJsPreference === true) // Usuário de teste: usa a preferência salva
    : (flag_adminjs?.enabled ?? false); // Usuário normal: usa a feature flag padrão

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    let url: string;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {},
    };

    if (shouldUseAdminJs) {
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
  }, [category, session?.user?.email, shouldUseAdminJs]);
  
  return { data, loading, error };
};
