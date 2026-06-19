"use client";
import EditExercise from "@/components/PageElements/cms/exercises/edit-exercise";
import { useEffect, useState } from "react";
import DetailExercise from "@/components/PageElements/cms/exercises/detail-exercise";

export default function Page({ params }: { params: { id: string } }) {
  
  const [isEditing, setIsEditing] = useState(false);
  const { id } = params;

  return (
    <>
      {isEditing ? (
        <EditExercise/>
      ) : (
        <DetailExercise id={params.id} />
      )}
    </>
  );
}