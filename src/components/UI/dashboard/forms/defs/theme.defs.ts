/*import { FormDef } from "@/types/form.types";
import z from "zod";

export const ThemeFormDefs = z.object({
  title: z.string(),
  shortDescription: z.string(),
  description: z.string()
 
});

export type ThemeFormData = z.infer<unknown>;

export const themeFormDefs: FormDef<ThemeFormData> = {
  defaultValues: {
    title: "",
    shortDescription: "",
    Description: ""
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text"
    },
    {
      name: "shortDescription",
      label: "Short Description",
      type: "text"
    },
    {
      name: "description",
      label: "Description",
      type: "text"
    }
  ],
};
*/

import { FormDef } from "@/types/form.types";
import z from "zod";

export const ThemeFormSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  description: z.string()
 
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
