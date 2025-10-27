'use client';

import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const useThemeApi = (category: string) => {
  const { flag_adminjs } = useFlags(['flag_adminjs']);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
        if (flag_adminjs === undefined) return;

    setLoading(true);
    setError(false);

    let url: string;
    const fetchOptions: RequestInit = { 
      method: 'GET',
      headers: {},
    };

    if (flag_adminjs.enabled) {
      console.log("Flagsmith: 'flag_adminjs' HABILITADA. Usando API do AdminJS (/api/themes).");
      url = `localhost:5002/themes`; 
    } else {
      console.log("Flagsmith: 'flag_adminjs' DESABILITADA. Usando API do Stackby (/api/stackby/Themes).");
      url = `api/stackbyApi/Themes`;
      fetchOptions.headers = {
        'operator': 'equal',
        'column': 'category',
        'value': category,
      };
    }

    fetch(url, fetchOptions) 
      .then(res => {
        if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
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