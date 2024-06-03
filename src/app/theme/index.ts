"use client";
import { createTheme } from "@mui/material/styles";

import components from "@/app/theme/components";
import typography from "@/app/theme/typography";
import palette from "@/app/theme/palette";
import breakpoints from "@/app/theme/breakpoints";

const theme = createTheme({
  spacing: 4,
  // @ts-ignore
  components,
  typography,
  palette,
  breakpoints,
});

export default theme;
