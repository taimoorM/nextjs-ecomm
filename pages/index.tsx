import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="">
      <Head>
        <title>Mango</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
