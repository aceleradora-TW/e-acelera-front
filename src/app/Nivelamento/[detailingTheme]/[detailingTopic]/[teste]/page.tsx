"use client";
import { AdvanceExercises } from "@/components/AdvanceExercises";

export default function Home({
  params,
}: {
  params: { teste: string };
})
 {
  return (
    <>
      <AdvanceExercises idExercises={params.teste} />
    </>
  );
}
