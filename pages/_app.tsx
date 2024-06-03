import { useState, type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Alert, CssBaseline, Snackbar, ThemeProvider } from "@mui/material";

import Header from "@/widgets/Header";
import theme from "@/app/theme";
import { SnackbarProps } from "@/shared/types";

import "./globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    message: "",
    severity: "success",
    open: false,
  });

  const handleClose = () => {
    setSnackbar((prevSnackbar) => ({
      ...prevSnackbar,
      open: false,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} setSnackbar={setSnackbar} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          severity={snackbar.severity}
          sx={{ color: "white" }}
        >
          <span style={{ color: "white" }}>{snackbar.message}</span>
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
