import Link from "next/link";
import {
  Stack as MUIStack,
  CircularProgress as MUICircularProgress,
  styled,
} from "@mui/material";

export const CircularProgress = styled(MUICircularProgress)(({ theme }) => ({
  position: "absolute",
  top: "46vh",
  left: "calc(50vw - 40px)",
}));

export const Stack = styled(MUIStack)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "16px",
  gridRowGap: "16px",
  gap: "4.792vw",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const NoEventsTitle = styled("h2")(({ theme }) => ({
  width: "60vw",
  position: "absolute",
  top: "46vh",
  left: "26vw",
}));

export const AddEvent = styled(Link)(({ theme }) => ({
  position: "fixed",
  bottom: "28px",
  right: "28px",
  backgroundColor: theme.palette.primary.main,
  width: "5vw",
  height: "5vw",
  borderRadius: "5vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    width: "8.398vw",
    height: "8.398vw",
  },

  [theme.breakpoints.down("sm")]: {
    width: "12.398vw",
    height: "12.398vw",
    borderRadius: "10vw",
  },

  "& svg": {
    fill: "#fff",
    width: "3vw",
    height: "3vw",

    [theme.breakpoints.down("lg")]: {
      width: "5vw",
      height: "5vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "7vw",
      height: "7vw",
    },
  },
}));
