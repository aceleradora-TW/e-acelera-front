'use client';
import { useState, useEffect } from 'react';
import { useFlags } from 'flagsmith/react';
import { useSession } from 'next-auth/react';

export const useExerciseApi = (id: string) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const { data: sessionData } = useSession();

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

    const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:5002';

    const useAdmin = flag_adminjs.enabled || (is_test_user && adminjs_preference);

    const fetchOptions: RequestInit = { method: 'GET', headers: {} };

    const doFetch = async () => {
      try {
        let res: Response;
        if (useAdmin) {
          const primary = `${BACKEND_BASE_URL}/exercises/${id.split('-')[0]}`;
          console.log('useExerciseApi: calling admin backend', primary);
          res = await fetch(primary, { ...fetchOptions, headers: { 'Content-Type': 'application/json' } });

          const ct = res.headers.get('content-type') || '';
          if (!res.ok || !ct.includes('application/json')) {
            console.warn('useExerciseApi: admin returned non-json or non-ok, status', res.status, 'ct', ct);
            // try proxy fallback
            const proxy = `/api/exercise/${id.split('-')[0]}`;
            console.log('useExerciseApi: trying proxy', proxy);
            res = await fetch(proxy, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
          }
        } else {
          // Stackby: call internal API and filter by rowIds/value
          const stackby = `/api/stackbyApi/Exercises`;
          console.log('useExerciseApi: calling stackby route', stackby, 'id', id);
          res = await fetch(stackby, { method: 'GET', headers: { operator: 'rowIds', value: id.split('-')[0] } as any });
        }

        if (!res.ok) {
          const txt = await res.text().catch(() => '<no-body>');
          throw new Error(`Request failed: ${res.status} - ${txt.slice(0, 200)}`);
        }

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          const txt = await res.text().catch(() => '<no-body>');
          throw new Error(`Response not JSON: ${txt.slice(0, 200)}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('useExerciseApi error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    doFetch();
  }, [id, flag_adminjs, is_test_user, adminjs_preference, sessionData?.user?.email]);

  return { data, loading, error };
};
