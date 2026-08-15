"use client";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { MotionConfig } from "framer-motion";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;