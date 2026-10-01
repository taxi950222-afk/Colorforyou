import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "人格色谱",
  description: "21个问题，生成属于你的专属颜色。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F6F6F4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-canvas font-sans text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
