import { Header } from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dase",
  description: "Site de divugação",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth overflow-x-hidden" lang="pt-Br">

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
