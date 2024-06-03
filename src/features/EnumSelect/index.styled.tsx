import { Select as MuiSelect } from '@mui/material';
import styled from 'styled-components';

export const Select = styled(MuiSelect)`
  .MuiSelect-select {
    &:focus {
      background: transparent;
    }
  }
`;
