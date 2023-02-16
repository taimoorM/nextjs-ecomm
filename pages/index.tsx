import type { NextPage } from "next";
import Head from "next/head";
import { Tab } from "@headlessui/react";
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
            <Tab.Group>
              <Tab.List className="flex justify-center">
                {/* {categories.map((category) => (
                  <Tab
                    key={category._id}
                    id={category._id}
                    className={({ selected }) =>
                      `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                        selected
                          ? "borderGradient bg-[#35383C] text-white"
                          : "border-b-2 border-[#35383C] text-[#747474]"
                      }`
                    }
                  >
                    {category.title}
                  </Tab>
                ))} */}
              </Tab.List>
              {/* <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
              </Tab.Panels> */}
            </Tab.Group>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
