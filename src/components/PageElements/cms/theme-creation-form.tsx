"use client";

import { ThemeFormData } from "@/components/UI/dashboard/forms/defs/theme.defs";
import Form from "@/components/UI/dashboard/form";
import { createTheme } from "@/utils/api/themes";
import { useRouter } from "next/navigation";

export function ThemeCreationForm() {
  const router = useRouter();

  const handleSubmit = async (data: ThemeFormData) => {
    await createTheme(data);
    router.push("/cms/themes");
  };

  return <Form title="Criar Novo Tema" onSubmit={handleSubmit} />;
}
