"use client";

import {
  ExerciseFormData,
  ExerciseFormDef,
  ExerciseSchema,
} from "@/components/UI/dashboard/forms/defs/exercise.defs";
import Form from "@/components/UI/dashboard/form";
import { createExercises } from "@/utils/api/exercises";
import { useRouter } from "next/navigation";

export default function CreateExercisePage() {
  const router = useRouter();

  const handleSubmit = async (data: ExerciseFormData) => {
    await createExercises(data);
    router.push("/cms/exercises");
  };

  return (
    <Form
      title="Criar Novo Exercício"
      schema={ExerciseSchema}
      formDefs={ExerciseFormDef}
      onSubmit={handleSubmit}
      mode="create"
      entityPath="cms/exercises"
    />
  );
}
