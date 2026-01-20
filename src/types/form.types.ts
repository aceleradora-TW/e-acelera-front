export type FieldDef<T> = {
  name: keyof T;
  label: string;
  type: "text" | "email" | "number" | "select" | "checkbox" | "combobox" | "textarea";
  options?: { label: string; value: string }[];
};

export type FormDef<T> = {
  fields: FieldDef<T>[];
  defaultValues: Partial<T>;
};
