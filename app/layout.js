import { Mulish, Bitter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import Head from "next/head";
const bitter = Bitter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Zane's Biography",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Cool Title</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_640.jpg"
        />
      </Head>
      <body className={mulish.className}>
        <Providers>
          <div className="text-black bg-white overflow-x-hidden">
            {/* <MainNavbar /> */}
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
