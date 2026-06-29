import DetailExercise from "@/components/PageElements/cms/exercises/detail-exercise";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <DetailExercise 
      id={params.id} 
      isEditing // Isso vai habilitar os campos automaticamente!
    />
  );
}