import moment from "moment";
import { Control, Controller } from "react-hook-form";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker as MUIDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { renderTimeViewClock } from "@mui/x-date-pickers";
import HelperText from "@/entities/HelperText";
import { FormControl } from "@mui/material";
import { InputProps } from "@/shared/types";

const DateTimePicker: React.FC<
  Omit<InputProps, "control"> & {
    id: string;
    control?: unknown;
    value?: string;
    disabled?: boolean;
    setValue?: () => void;
  }
> = ({
  name,
  label,
  control,
  required = false,
  error = false,
  disabled,
  ...props
}) => (
  <FormControl {...props}>
    <HelperText label={label} required={required} error={error} />
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Controller
        control={control as Control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <MUIDateTimePicker
            disabled={disabled}
            onChange={onChange}
            value={value ? moment(value).seconds(0).milliseconds(0) : value}
            inputRef={ref}
            slotProps={{
              textField: (props) => ({
                error,
                name,
                required,
                variant: "standard",
                ...props,
                sx: {
                  ".MuiIconButton-root": {
                    marginRight: "-7px",
                  },
                },
              }),
            }}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        )}
        rules={{ required }}
      />
    </LocalizationProvider>
  </FormControl>
);

export default DateTimePicker;
