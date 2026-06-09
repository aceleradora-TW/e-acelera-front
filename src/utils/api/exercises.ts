export async function getExercises(page: number, limit: number) {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const res = await fetch(`/api/exercises?${query.toString()}`);

  if (!res.ok) throw new Error("Erro ao buscar exercícios");
  return res.json();
}

export async function createExercises(exerciseData: {
  title: string;
  shortDescription: string;
  description: string;
  sequence?: number;
  topicId?: string; 
}) {
  const res = await fetch("/api/exercises", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exerciseData),
  });

   if(!res.ok){
      const errorData = await res.json();
      throw new Error(errorData.message || "Erro ao criar exercício");
    }
    return res.json();
}