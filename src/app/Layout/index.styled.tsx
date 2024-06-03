import { styled } from "@mui/material";

export const Main = styled("main")(({ theme }) => ({
  padding: "5vw",

  [theme.breakpoints.down("lg")]: {
    padding: "5vw 15vw",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5vw 8vw",
  },
}));
