import type { Metadata } from "next";
import './../../public/estilo/global.css'


export const metadata: Metadata = {
  title: "Ocean in Focus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
