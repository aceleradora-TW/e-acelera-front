import api from "@/lib/api";
import { GetThemesPayload } from "@/types/themes";

export const getThemes = async (payload: GetThemesPayload): Promise<any[]> => {
    // criar arquivo para armazenar as api url's e chamar aqui com apiUrls.themes, por exemplo
    // tipar o retorno ao dar get na tabela de params
    const data = await api.get<any[]>("api/themes", { params: payload });

    return data.data
}