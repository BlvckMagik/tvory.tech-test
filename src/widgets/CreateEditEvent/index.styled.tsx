import { styled } from "@mui/material";
import { Typography as StyledTypography } from "@mui/material";
import { Tooltip as StyledTooltip } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";

export const Form = styled("form")(({ theme }) => ({
  display: "grid",
  position: "relative",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "4vw",
  gridRowGap: "4vw",
  margin: "auto",
  width: "70vw",

  "& > :last-child": {
    gridColumn: "span 2",
  },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
    paddingTop: "1.563vw",
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: "3.563vw",

    "& *": {
      gridColumn: "span 2",
    },
  },
}));

export const Typography = styled(StyledTypography)(({ theme }) => ({
  position: "relative",
  fontSize: "16px",
  width: "100%",
  //   backgroundColor: "#8080802b",
  paddingLeft: "5px",
  textAlign: "center",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const DeleteTooltip = styled(StyledTooltip)(({ theme }) => ({
  position: "absolute",
  top: "-1px",
  right: "4px",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const DeleteIcon = styled(Delete)(({ theme }) => ({
  width: "16px",
  opacity: "0.7",
  cursor: "pointer",
  "&:hover": {
    color: "red",
  },

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const AddIcon = styled(Add)(({ theme }) => ({
  opacity: "0.7",
  cursor: "pointer",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const ResetIcon = styled(CachedIcon)(({ theme }) => ({
  opacity: "0.7",
  cursor: "pointer",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const Tooltip = styled(StyledTooltip)(({ theme }) => ({
  position: "absolute",
  top: "-20px",
  right: "0px",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));
