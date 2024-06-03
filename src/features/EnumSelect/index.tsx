// @ts-nocheck
import { SelectProps, MenuItem, FormControl } from "@mui/material";
import { Control, Controller } from "react-hook-form";

import { InputProps, Option } from "@/shared/types";
import HelperText from "@/entities/HelperText";

import * as Styled from "./index.styled";

const EnumSelect: React.FC<
  InputProps &
    SelectProps & {
      options: Record<string, string> | Record<string, string>[] | Option[];
    }
> = ({
  name,
  label = "",
  control,
  options,
  error = false,
  required = false,
  ...props
}) => {
  return (
    <FormControl variant="standard" {...props}>
      <HelperText label={label} required={required} error={error} />
      <Controller
        control={control as Control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Styled.Select
            onChange={onChange}
            value={value}
            name={name}
            label={label}
            required={required}
            error={error}
            displayEmpty
            multiple={false}
            {...props}
          >
            {Array.isArray(options)
              ? options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))
              : Object.keys(options).map((option) => (
                  <MenuItem key={option} value={option}>
                    {options[option]}
                  </MenuItem>
                ))}
            {!options.length && !Object.keys(options).length && (
              <MenuItem>No items </MenuItem>
            )}
          </Styled.Select>
        )}
        rules={{ required }}
      />
    </FormControl>
  );
};

export default EnumSelect;
