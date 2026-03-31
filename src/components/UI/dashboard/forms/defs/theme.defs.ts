import { FormDef } from "@/types/form.types";
import z from "zod";

export const ThemeFormSchema = z.object({
  title: z.string().trim().nonempty("Título obrigatório"),
  shortDescription: z.string().trim().nonempty("Descrição curta obrigatória"),
  description: z.string().trim().nonempty("Descrição obrigatória"),
  image: z.string().trim().nonempty("Imagem obrigatória"),
  alt: z.string().trim().nonempty("Texto alt obrigatório"),
  category: z.enum(["Leveling", "SelfStudy"]),
  sequence: z.number().int().nonnegative("Sequência deve ser um número não-negativo").optional(),
});

export type ThemeFormData = z.infer<typeof ThemeFormSchema>;
 
export const themeFormDefs: FormDef<ThemeFormData> = {
  defaultValues: {
    title: "",
    shortDescription: "",
    description: "",
    image: "",
    alt: "",
    category: "Leveling",
    sequence: 0,
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
    {
      name: "image",
      label: "URL da Imagem",
      type: "text",
    },
    {
      name: "alt",
      label: "Texto alt da imagem",
      type: "text",
    },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      options: [
        { label: "Nivelamento", value: "Leveling" },
        { label: "Autoestudo", value: "SelfStudy" },
      ],
    },
    {
      name: "sequence",
      label: "Sequência",
      type: "number",
    },
  ],
};
