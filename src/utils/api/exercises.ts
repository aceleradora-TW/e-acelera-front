export async function getExercises(page: number, limit: number) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const res = await fetch(`/api/exercises?${params.toString()}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Erro ao buscar exercícios");
  return res.json();
}
