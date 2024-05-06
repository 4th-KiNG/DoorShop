import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "@/components/Main/MainPage";
import '../../public/fonts/lato.css'
import Head from "next/head";
export default function Home() {
  return (
    <>
      
      <main>
        <MainPage></MainPage>
      </main>
    </>
  );
}
