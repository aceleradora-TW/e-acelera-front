'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';

export const useExerciseApi = (id: string) => {
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
      console.log(`Flagsmith: 'flag_adminjs' HABILITADA. Chamando a rota de API /api/exercises/${id}.`);
      url = `/api/exercises/${id}`;
    } else {
      console.log("Flagsmith: 'flag_adminjs' DESABILITADA. Chamando a rota de API /api/stackbyApi/Exercises.");
      url = `/api/stackbyApi/Exercises`;
      fetchOptions.headers = {
        'operator': 'rowIds',
        'value': id,
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
        console.error("Erro no hook useExerciseApi:", err);
        setError(true);
      })
      .finally(() => setLoading(false));

  }, [sessionData?.user.email, id, flag_adminjs.enabled, flag_adminjs, is_test_user, adminjs_preference]);

  return { data, loading, error };
};
