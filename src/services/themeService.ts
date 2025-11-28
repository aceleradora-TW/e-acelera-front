import { ApiResponse, Theme } from "@/types/type";

export const getThemes = async (): Promise<Theme[]> => {
  const response = await fetch("http://localhost:5002/themes"); // porta do back
  if (!response.ok) throw new Error("Erro ao buscar os temas");
  const data: Theme[] = await response.json();

 return data.sort((a, b) => a.sequence - b.sequence);
 
};
