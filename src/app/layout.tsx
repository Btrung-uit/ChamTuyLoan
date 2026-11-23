import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./site.css";

const lora = localFont({
  src: "./fonts/lora.ttf",
  weight: "400 700",
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chạm Túy Loan",
  description: "Khám phá nghề bánh tráng và đình làng Túy Loan qua hai câu chuyện bằng hình ảnh.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={lora.variable}>
      <body>{children}</body>
    </html>
  );
}
