import React from "react";
import WebsiteFooter from "./footer";
import WebsiteHeader from "./header";
import theme from "../theme/theme";
import { NextAppProvider } from "@toolpad/core/nextjs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <NextAppProvider theme={theme}>
      <WebsiteHeader />
      {children}
      <WebsiteFooter />
    </NextAppProvider>
  );
}
