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
        <div className="relative h-[200vh] bg-[#e7ecee]">
          <Hero />
        </div>
        <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
          <div className="space-y-10 py-16">
            <h2 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
              New Promos
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
