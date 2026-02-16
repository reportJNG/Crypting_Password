import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/settings/Theme-Provider";
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
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
