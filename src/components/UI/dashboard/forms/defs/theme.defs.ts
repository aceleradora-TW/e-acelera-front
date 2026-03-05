import { FormDef } from "@/types/form.types";
import z from "zod";

export const ThemeFormSchema = z.object({
  title: z.string().trim().nonempty("Título obrigatório"),
  shortDescription: z.string().trim().nonempty("Descrição curta obrigatória"),
  description: z.string().trim().nonempty("Descrição obrigatória")
});

export type ThemeFormData = z.infer<typeof ThemeFormSchema>;
 
export const themeFormDefs: FormDef<ThemeFormData> = {
  defaultValues: {
    title: "",
    shortDescription: "",
    description: "",
  },

  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
    },
    {
      name: "shortDescription",
      label: "Descrição curta",
      type: "text",
    },
    {
      name: "description",
      label: "Descrição",
      type: "textarea",
    },
  ],
};
