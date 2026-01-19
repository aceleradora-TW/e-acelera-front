import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

type InputDashboardProps = {
    label: string;
    InputProps?: TextFieldProps['InputProps'];
    multiline?: boolean;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type ExampleInput = {
  example: string
}
export function InputDashboard(
  {label, InputProps, multiline}: InputDashboardProps,
  props: UseControllerProps<ExampleInput>,
  ){
  const {field, fieldState} = useController(props);
  return (
    <>
    <TextField
      label={label}
      InputProps={InputProps}
      multiline={multiline}
      fullWidth
      sx={{color: 'black'}}
      {...field}
    />
    <p>{fieldState.error && "error"}</p>
    <p>{fieldState.invalid && "invalid"}</p>
    <p>{fieldState.isTouched && "touched"}</p>
    </>
  )
}

/*

      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
      />
      <TextField id="outlined-search" label="Search field" type="search" />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="ola"
        InputProps={{ readOnly: true }}
      />
      */

/**
 * adicionar novo registro => /admin/dashboard/theme/new
 * - campos vazios
 *
 * editar registro => /admin/dashboard/theme/:id
 *  => contexto ou nova req -> pegar dados do tema que já existem
 */
