import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B1219",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "VAYRO — MOVE AS ONE",
    template: "%s | VAYRO",
  },
  description:
    "VAYRO connects your crew through real-time location sharing and instant voice communication. Move as one.",
  applicationName: "VAYRO",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VAYRO",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
