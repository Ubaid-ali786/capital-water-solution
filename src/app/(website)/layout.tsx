"use client";

import WebsiteLayout from "@/src/layout";
// import WebsiteLayout from "@/layout/website";
// import { websiteNavigation } from "@/layout/website/navigation";
// import { AppProvider } from "@toolpad/core";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    //   <AppProvider navigation={websiteNavigation}>
        <WebsiteLayout>{children}</WebsiteLayout>
    //   </AppProvider>
  );
}
