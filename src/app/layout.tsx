import Provider from "@/components/Provider";
import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mentor App",
    default: "Mentor App",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
        <ToastContainer position='bottom-right' />
      </body>
    </html>
  );
}
