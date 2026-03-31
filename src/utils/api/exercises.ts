export async function getExercises(page: number, limit: number) {
  const res = await fetch(`http://localhost:5002/exercises?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar exercícios");
  return res.json();
}
