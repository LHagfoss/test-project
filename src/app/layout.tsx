import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Logg for Utplassering",
  description: "Utplassering hos IT avdelingen i Kommunen der jeg gjorde litt diverse ting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Lucas Hagfoss"/>
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
};