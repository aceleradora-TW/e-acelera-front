'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';

export const useThemeApi = (category: string) => {
  const { flag_adminjs } = useFlags(['flag_adminjs']);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (flag_adminjs === undefined) {
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

    if (flag_adminjs.enabled) {
      console.log("Flagsmith: 'flag_adminjs' HABILITADA. Chamando a rota de API /api/themes.");
      url = `/api/themes`; 

    } else {
      console.log("Flagsmith: 'flag_adminjs' DESABILITADA. Chamando a rota de API /api/stackbyApi/Themes.");
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
          return res.json().then(err => {
            throw new Error(err.error || `A requisição para ${url} falhou: ${res.status}`);
          });
        }
        return res.json();
      })
      .then(setData)
      .catch(err => {
        console.error("Erro no hook useThemeApi:", err);
        setError(true);
      })
      .finally(() => setLoading(false));

  }, [category, flag_adminjs]);

  return { data, loading, error };
};
