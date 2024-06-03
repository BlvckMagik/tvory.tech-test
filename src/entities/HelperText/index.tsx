import { FormHelperText as MuiFormHelperText } from "@mui/material";
import styled from "styled-components";

const FormHelperText = styled(MuiFormHelperText)`
  font-size: 0.85rem;
`;

type HelperTextProps = {
  label: React.ReactNode;
  required: boolean;
  error?: boolean;
};

const HelperText = ({
  label,
  required,
  error = false,
}: HelperTextProps): JSX.Element => {
  return (
    <FormHelperText
      required={required}
      error={error}
      sx={{ marginLeft: 0, marginRight: 0 }}
    >
      {label} {required && "*"}
    </FormHelperText>
  );
};

export default HelperText;
