export async function getThemes(page: number, limit: number) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  const res = await fetch(`/api/themes?${params.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar temas");
  return res.json();
}

export async function createTheme(themeData: {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  category: "Leveling" | "SelfStudy";
  sequence?: number;
}) {
  const res = await fetch(`/api/themes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(themeData),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || "Erro ao criar tema");
  }
  return res.json();
}
