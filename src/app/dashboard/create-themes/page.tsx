'use client';

import Form from '@/components/UI/dashboard/form';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';

export default function CreateThemePage() {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/dashboard'); 
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Criar Novo Tema
      </Typography>

      <Form onCancel={handleCancel} />
    </div>
  );
}