import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Smart analytics",
  description: "Aplicación de DPI para la Universidad Panamericana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
