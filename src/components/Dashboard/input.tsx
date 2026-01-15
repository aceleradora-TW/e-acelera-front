/*import { TextField, TextFieldProps } from "@mui/material";

type InputDashboardProps = {
    label: string;    
    InputProps?: TextFieldProps['InputProps'];
    multiline?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputDashboard( 
  {label, InputProps, multiline, value, onChange}: InputDashboardProps
  ){
  return (
    <TextField
      label={label}
      InputProps={InputProps}
      multiline={multiline}
      value={value}
      onChange={onChange}
      fullWidth
      sx={{color: 'black'}}
    />
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


import { TextField} from "@mui/material";

type modeInput = 'new' | 'edit' | 'read';

type InputDashboardProps = {
  label: string;
  mode: modeInput;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
};

export function Input({
  label,
  mode = 'new',
  value,
  onChange,
  multiline = false,
  rows,
}: InputDashboardProps) {
  return (
    <TextField
      disabled={mode === "read"}
      label={label}
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      //InputProps={{ readOnly: mode === "read"}}
      fullWidth
    />
  );
}
