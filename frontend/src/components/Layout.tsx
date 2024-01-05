import {Header} from "@/components/Header";
import Head from "next/head";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({children, title}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main-content"]}>
        <Header />
        {children}
      </main>
    </>
  );
}
