import DetailExercise from "@/components/PageElements/cms/exercises/detail-exercise";

export default function Page({ params }: { params: { id: string } }) {
  return <DetailExercise id={params.id} />;
}