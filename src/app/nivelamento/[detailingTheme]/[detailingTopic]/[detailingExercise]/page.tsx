'use client'
import { RenderDetailingExercisePage } from "@/components/PageElements/Renders/RenderDetailingExercisePage";

export default function DetailingExercise({
  params,
}: {
  params: { detailingExercise: string };
}) {
  return RenderDetailingExercisePage(params.detailingExercise)
}
