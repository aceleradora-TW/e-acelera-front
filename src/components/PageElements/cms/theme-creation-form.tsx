"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { ThemeFormData, ThemeFormSchema, themeFormDefs } from "@/components/UI/dashboard/forms/defs/theme.defs";
import { zodResolver } from "@hookform/resolvers/zod";
import { containerStyles } from "@/components/UI/dashboard/forms/form.styles";
import { FieldRenderer } from "@/components/UI/dashboard/forms/field-renderer";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";
import { createTheme } from "@/utils/api/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ThemeCreationForm() {
  const theme = useTheme();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<ThemeFormData>({
    resolver: zodResolver(ThemeFormSchema),
    defaultValues: themeFormDefs.defaultValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ThemeFormData> = async (data) => {
    setError(null);
    setIsLoading(true);
    try {
      await createTheme(data);
      router.push("/cms/themes");
    } catch (err: any) {
      setError(err?.message || "Erro ao criar tema");
      setIsLoading(false);
    }
  };

  return (
    <Container
      component="form"
      maxWidth="xl"
      sx={containerStyles(theme)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
        Criar Novo Tema
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2.5}>
        {themeFormDefs.fields.map((field) => (
          <Controller
            key={field.name as string}
            name={field.name}
            control={control}
            render={({ field: rhfField, fieldState }) => (
              <FieldRenderer field={field} rhfField={rhfField} error={fieldState.error} />
            )}
          />
        ))}
      </Stack>

      <FormActions isValid={isValid && !isLoading} isDirty={isDirty} />
    </Container>
  );
}
