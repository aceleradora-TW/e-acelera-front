import { FormDef } from "@/types/form.types"
import z from "zod"

export const TopicFormSchema = z.object({
  title: z.string().trim().nonempty("Título obrigatório"),
  shortDescription: z.string().trim().nonempty("Descrição obrigatória"),
  sequence: z.number().int().nonnegative("Sequência deve ser um número não-negativo").optional(),
  references: z.string().default(""),
  themeId: z.string().nonempty("Tema obrigatório"),
  videoUrl: z.url("URL do vídeo inválida").optional(),
})

export type TopicFormData = z.infer<typeof TopicFormSchema>

export const topicFormDefs: FormDef<TopicFormData> = {
  defaultValues: {
    title: "",
    shortDescription: "",
    sequence: 0,
    themeId: "",
    references: "",
    videoUrl: "",
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
      type: "textarea",
    },
    {
      name: "sequence",
      label: "Sequência",
      type: "number",
    },
    {
      name: "themeId",
      label: "Tema",
      type: "select",
      options: [],
    },
    {
      name: "videoUrl",
      label: "URL do Vídeo",
      type: "text",
    },
    {
      name: "references",
      label: "Referências",
      type: "textarea",
    }
  ],
}