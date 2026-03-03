'use client';

import Form from '@/components/UI/dashboard/form';
import { mockRows } from '@/components/UI/dashboard/table-dashboard';

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const { id } = params;

  const rowData = mockRows.find(r => r.id === id);

  if (!rowData) return <div>Registro não encontrado</div>;

  return <Form defaultValues={rowData} />;
}