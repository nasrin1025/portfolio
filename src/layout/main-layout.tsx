import { ReactNode } from "react";

import { Inter, Sora } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={classNames("font-sans", inter.variable, sora.variable)}>
      <div className="min-h-screen">
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
