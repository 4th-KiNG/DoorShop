import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "@/components/Main/MainPage";
import '../../public/fonts/lato.css'
import Head from "next/head";
import './globals.css'
export default function Home() {
  return (
    <>
      <main>
        <Head>
          <meta name="yandex-verification" content="6acc5604e1c351a1" />
        </Head>
        <MainPage></MainPage>
      </main>
    </>
  );
}
