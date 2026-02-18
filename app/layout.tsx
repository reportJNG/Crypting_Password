import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/app/frontend/settings/Theme-Provider";
export const metadata: Metadata = {
  title: "Crypt Password",
  description: "Crypt Password",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
