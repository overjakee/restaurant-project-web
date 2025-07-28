import "../styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "../components/Notification";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Notification />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
