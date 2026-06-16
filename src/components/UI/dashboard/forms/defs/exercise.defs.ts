import { z } from "zod";
import { FormDef } from "@/types/form.types";

export const ExerciseSchema = z.object({
  title: z.string().trim().nonempty("Título obrigatório"),
  shortDescription: z.string().trim().nonempty("Descrição curta obrigatória"),
  description: z.string().trim().nonempty("Descrição obrigatória"),
  sequence: z.number().int().nonnegative("Sequência deve ser um número inteiro não negativo"),
  topicId: z.string().trim().nonempty("Tópico obrigatório"),
});

export type ExerciseFormData = z.infer<typeof ExerciseSchema>;

export const ExerciseFormDef: FormDef<ExerciseFormData> = ({

  defaultValues: { 
    title: "",
    shortDescription: "",
    description: "",  
    sequence: 0,
    topicId: "",
  },

  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
    },
    {
      name: "shortDescription",
      label: "Descrição Curta",
      type: "text",
    },
    {
      name: "description",
      label: "Descrição", 
      type: "textarea",
    },
    {
      name: "sequence",
      label: "Sequência",
      type: "number",
    },
    {
      name: "topicId",
      label: "Tópico",  
      type: "text",
    },
  ],
});
