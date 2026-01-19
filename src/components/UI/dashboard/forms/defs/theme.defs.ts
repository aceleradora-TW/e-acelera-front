import { FormDef } from "@/types/form.types";
import z from "zod";

export const ThemeFormDefs = z.object({
  // Declaração do schema/defs
});

export type ThemeFormData = z.infer<unknown>;

export const themeFormDefs: FormDef<any> = {
  fields: [],
  defaultValues: {},
};
