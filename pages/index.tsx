import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ModeToggle from "../components/ModeToggle";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-col h-screen bg-white dark:bg-black items-center">
        <div className="flex">
          <h1 className="mx-auto text-3xl font-bold underline text-black dark:text-white">
            Init for dark mode
          </h1>
          <ModeToggle />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
