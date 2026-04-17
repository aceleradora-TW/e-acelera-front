"use client";

import Form from "@/components/UI/dashboard/form";
import { createTopic } from "@/utils/api/topics";
import { useRouter } from "next/navigation";

export default function CreateTopicPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createTopic(data);
    router.push("/cms/topics");
  };

  return <Form title="Criar Novo Tópico" onSubmit={handleSubmit} />;
}