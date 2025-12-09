'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';
import { DataItem, Topic }  from "@/types/type";

export const useTopicApi = (id: string) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const {data: sessionData} = useSession();

  const [data, setData] = useState<Topic | DataItem[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
   
  const isAdminJS = flag_adminjs?.enabled || (is_test_user && adminjs_preference);
  const source: 'adminjs' | 'stackby' = isAdminJS ? 'adminjs' : 'stackby';
  const topicId = source === 'stackby' ? id.split('-')[0] : id;

  useEffect(() => {
    if(!id) return;
    
    setLoading(true);
    setError(false);

    let url: string;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: {},
    };
    if (source === 'adminjs') {
      url = `/api/topics/${topicId}`;
    } else {
      url = `/api/stackbyApi/Topics`;
      fetchOptions.headers = {
        'operator': 'equal',
        'column': 'idTopics',
        'value': topicId,
      };
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

  }, [sessionData?.user.email, id, source, topicId]);

  if (source === 'adminjs') {
  return { data: data as Topic, loading, error, source };
  } else {
    return { data: data as DataItem[], loading, error, source };
  }
};
