//@ts-nocheck
import type { Control, ValidationRule } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import HelperText from "@/entities/HelperText";

const FormInput: React.FC<
  Omit<InputProps, "control"> & {
    control?: unknown;
    readOnly?: boolean;
    pattern?: ValidationRule<RegExp>;
  } & TextFieldProps
> = ({
  name,
  label,
  control,
  required = false,
  multiline = false,
  pattern = null,
  error = false,
  readOnly = false,
  maxRows = 1,
  ...props
}) => {
  return (
    <FormControl variant="standard" {...props}>
      <HelperText label={label} required={required} error={error} />
      <Controller
        control={control as Control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextField
            type="text"
            onChange={onChange}
            value={value}
            name={name}
            variant="standard"
            error={error}
            required={required}
            multiline={multiline}
            maxRows={maxRows}
            inputProps={{ readOnly }}
            {...props}
          />
        )}
        rules={{ required, pattern }}
      />
    </FormControl>
  );
};

export default FormInput;
