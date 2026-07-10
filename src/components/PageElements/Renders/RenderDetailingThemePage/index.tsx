'use client';

import React from 'react';
import { useFlags } from 'flagsmith/react';
import useFetchData from '@/components/fetchData';
import { Loading } from '@/components/Loading';
import { LayoutPage } from '../../LayoutPage';
import { DetailingThemeContent } from '../../Content/DetailingThemeContent';
import { BadRequest } from '@/components/BadRequest';
import { NoData } from '@/components/NoData';

interface RenderDetailingThemePageProps {
  id: string;
}

function traitIsTrue(value: unknown): boolean {
  return (
    value === true ||
    value === 'true' ||
    value === 1 ||
    value === '1'
  );
}

export const RenderDetailingThemePage: React.FC<
  RenderDetailingThemePageProps
> = ({ id }) => {
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(
    ['flag_adminjs'],
    ['is_test_user', 'adminjs_preference']
  );

  const extractedThemeId = decodeURIComponent(id).split('-')[0];

  const isTestUser = traitIsTrue(is_test_user);

  const usePostgres =
    flag_adminjs?.enabled === true ||
    (isTestUser && traitIsTrue(adminjs_preference));

  const url = usePostgres
    ? `/api/themes/${extractedThemeId}`
    : '/api/stackbyApi/Themes';

  const fetchOptions: RequestInit = usePostgres
    ? {
        method: 'GET',
      }
    : {
        method: 'GET',
        headers: {
          operator: 'rowIds',
          value: extractedThemeId,
        },
      };

  const {
    data: renderData,
    isLoading: loading,
    error,
  } = useFetchData(url, fetchOptions);

  console.log('RenderDetailingThemePage:', {
    extractedThemeId,
    usePostgres,
    url,
    renderData,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <BadRequest />;
  }

  if (!renderData) {
    return <NoData />;
  }

  return (
    <LayoutPage>
      <DetailingThemeContent data={renderData} />
    </LayoutPage>
  );
};
