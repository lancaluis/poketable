import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import Header from "#/components/Header";
import { Providers } from "./providers";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
