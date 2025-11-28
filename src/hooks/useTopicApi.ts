'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';
import { DataItem }  from "@/types/type";

export const useTopicApi = (id: string) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const {data: sessionData} = useSession();

  const [data, setData] = useState<any[] | DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [source, setSource] = useState<'adminjs' | 'stackby' | null>(null);

  useEffect(() => {
    if(!id) return;
    
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
      console.log("Flagsmith: 'flag_adminjs' HABILITADA. Chamando a rota de API /api/topics/:id.");
      url = `/api/topics/${id}`;
      setSource('adminjs');
    } else {
      console.log("Flagsmith: 'flag_adminjs' DESABILITADA. Chamando a rota de API /api/stackbyApi/Topics.");
      url = `/api/stackbyApi/Topics`;

      const formatedId = id.split("-")[0]
      fetchOptions.headers = {
        'operator': 'equal',
        'column': 'idTopics',
        'value': formatedId,
      };
      setSource('stackby');
    }

    fetch(url, fetchOptions)
      .then(async res => {
        if (!res.ok) {
          return res.json().then(err => {
            throw new Error(err.error || `A requisição para ${url} falhou: ${res.status}`);
          });
        }
        const results = await res.json();
        setData(results.data);
        return;
      })
      .catch(err => {
        console.error("Erro no hook useTopicApi:", err);
        setError(true);
      })
      .finally(() => setLoading(false));

  }, [sessionData?.user.email, id, flag_adminjs.enabled, flag_adminjs, is_test_user, adminjs_preference]);

  return { data, loading, error, source };
};
