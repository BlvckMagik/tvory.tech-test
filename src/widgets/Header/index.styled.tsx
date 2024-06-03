import { Typography, Avatar as MUIAvatar, styled } from "@mui/material";
import Link from "next/link";

export const Header = styled("header")(({ theme }) => ({
  padding: "1.563vw 2.604vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    padding: "3.125vw 6.836vw",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5.125vw 3.836vw",
  },
}));

export const Logo = styled(Link)(({ theme }) => ({
  fontFamily: '"Dancing Script"',
  fontSize: "2.083vw",
  fontWeight: 900,

  [theme.breakpoints.down("lg")]: {
    fontSize: "3.516vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "5.516vw",
  },
}));

export const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.down("sm")]: {},
}));

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: "3.5vw",
  width: "3.5vw",

  [theme.breakpoints.down("lg")]: {
    height: "4.102vw",
    width: "4.102vw",
  },

  [theme.breakpoints.down("lg")]: {
    height: "6.102vw",
    width: "6.102vw",
  },
}));

export const Mail = styled(Typography)(({ theme }) => ({
  fontSize: "1.146vw",

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.563vw",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "3vw",
  },
}));
