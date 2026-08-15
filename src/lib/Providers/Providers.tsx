"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { MotionConfig } from "framer-motion";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Provider>
  );
};

export default Providers;