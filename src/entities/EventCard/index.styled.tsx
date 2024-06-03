import {
  Typography,
  styled,
  Avatar as MUIAvatar,
  SpeedDial as MUISpeedDial,
} from "@mui/material";
import Link from "next/link";

export const Card = styled("div")<{ isSelected: boolean }>(
  ({ theme, ...props }) => ({
    position: "relative",
    padding: "1.354vw",
    minHeight: "35vh",
    WebkitBoxShadow: "0px 0px 7px 1px rgba(0,0,0,0.75)",
    MozBoxShadow: "0px 0px 7px 1px rgba(0,0,0,0.75)",
    boxShadow:
      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
    backgroundColor: "#fff",
    borderRadius: "14px",
    ...(props.isSelected && {
      border: `0.208vw ${theme.palette.primary.main} solid`,
      boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, ${theme.palette.primary.main} 0px 1px 3px 0px, ${theme.palette.primary.main} 0px 1px 2px -1px`,
    }),

    [theme.breakpoints.down("lg")]: {
      padding: "3.125vw",
    },
    // [theme.breakpoints.down("sm")]: {},
  })
);

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.667vw",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "0.625vw",
  marginTop: "2.396vw",

  [theme.breakpoints.down("lg")]: {
    fontSize: "2.539vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4vw",
    marginTop: "5.396vw",
  },
}));

export const CreatedDate = styled(Link)(({ theme }) => ({
  position: "absolute",
  top: "1.354vw",
  right: "5.354vw",
  fontSize: "0.938vw",
  color: "#9c9c9c",
  fontWeight: 700,
  textAlign: "center",

  [theme.breakpoints.down("lg")]: {
    top: "2.539vw",
    right: "5.539vw",
    fontSize: "1.465vw",
  },

  [theme.breakpoints.down("sm")]: {
    top: "2.539vw",
    right: "9.539vw",
    fontSize: "3vw",
  },
}));

export const Status = styled("div")<{ bgColor: string }>(
  ({ theme, ...props }) => ({
    padding: "3px 5px",
    borderRadius: "4px",
    position: "absolute",
    top: "1.354vw",
    left: "1.354vw",
    fontSize: "0.938vw",
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: props.bgColor,

    [theme.breakpoints.down("lg")]: {
      top: "2.539vw",
      left: "2.539vw",
      fontSize: "1.465vw",
    },

    [theme.breakpoints.down("sm")]: {
      top: "3.539vw",
      left: "3.539vw",
      fontSize: "2.465vw",
      borderRadius: "6px",
    },
  })
);

export const Chip = styled("div")<{ bgColor: string }>(
  ({ theme, ...props }) => ({
    display: "inline-block",
    padding: "3px 5px",
    borderRadius: "4px",
    fontSize: "0.938vw",
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: props.bgColor,

    [theme.breakpoints.down("lg")]: {
      top: "2.539vw",
      left: "2.539vw",
      fontSize: "1.465vw",
    },

    [theme.breakpoints.down("sm")]: {
      top: "2.539vw",
      left: "2.539vw",
      fontSize: "2.465vw",
      borderRadius: "6px",
    },
  })
);

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: "3.5vw",
  width: "3.5vw",

  [theme.breakpoints.down("lg")]: {
    height: "4.102vw",
    width: "4.102vw",
  },

  [theme.breakpoints.down("sm")]: {
    height: "6.102vw",
    width: "6.102vw",
  },
}));

export const Item = styled(Typography)(({ theme }) => ({
  fontSize: "1.146vw",
  marginBottom: "0.625vw",

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.758vw",
    marginBottom: "1.367vw",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "3vw",
    marginBottom: "2.367vw",
  },
}));

export const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  margin: "0.729vw 0",

  [theme.breakpoints.down("lg")]: {
    margin: "1.729vw 0",
  },

  [theme.breakpoints.down("sm")]: {
    margin: "2.729vw 0",
  },
}));

export const Contacts = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

export const SpeedDial = styled(MUISpeedDial)(({ theme }) => ({
  position: "absolute",
  top: "calc(0.354vw - 14px)",
  right: "0.55vw",

  [theme.breakpoints.down("lg")]: {
    top: "calc(2.354vw - 12px)",
  },

  [theme.breakpoints.down("sm")]: {
    top: "calc(2.354vw - 12px)",
  },

  "&:hover": {
    background: "none",
  },

  "& .MuiSvgIcon-root": {
    width: "1.458vw",

    [theme.breakpoints.down("lg")]: {
      width: "3.458vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "5.458vw",
    },
  },

  "& .MuiButtonBase-root": {
    boxShadow: "none",
    background: "none",
    width: "2.917vw",
    height: "2.917vw",

    [theme.breakpoints.down("lg")]: {
      width: "4.917vw",
      height: "4.917vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "9.917vw",
      height: "8.917vw",
    },

    "&:hover": {
      background: "none",
    },
  },

  "& .MuiSpeedDial-actions": {
    paddingTop: "1.25vw",

    [theme.breakpoints.down("lg")]: {
      paddingTop: "calc(2.25vw + 10px)",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "calc(2.25vw + 10px)",
    },
  },

  "& .MuiFab-root": {
    width: "4.917vw",
    height: "4.917vw",
    padding: "0",
    margin: 0,

    [theme.breakpoints.down("sm")]: {
      width: "9.917vw",
      height: "8.917vw",
    },

    "&:hover": {
      background: "none",
    },
  },
}));
