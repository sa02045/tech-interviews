import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "~/components/Layout";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <NextUIProvider>
      <ClerkProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </NextUIProvider>
  );
};

export default api.withTRPC(MyApp);
