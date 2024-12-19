import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/worksans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/worksans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/worksans-semiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/worksans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/worksans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Startups Directory",
  description: "Pitch, Vote and Grow with Startups Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
