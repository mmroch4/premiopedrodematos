import { ubuntu } from "@/fonts/ubuntu";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import "./globals.css";
import { metadata as m } from "./metadata";

export const metadata: Metadata = {
  ...m,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-slate-50 text-slate-900 antialiased",
          ubuntu.className,
        )}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
