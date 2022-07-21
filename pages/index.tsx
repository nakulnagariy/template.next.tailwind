import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../components/Navbar/Footer";
import MainNav from "../components/Navbar/MainNav";
import SideNav from "../components/Navbar/SideNav";
import Layout from "../sections/Layout";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col relative mt-14'>
      <MainNav />
      <div className='flex'>
        <SideNav />
        <div className='px-5 my-5 dark:bg-slate-400'>
          <h1 className='text-3xl font-bold underline'>Hello world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            corrupti fugiat voluptates similique aut iure cum consectetur,
            expedita omnis! Aliquam quidem eveniet culpa quas aspernatur
            deserunt inventore dolore perspiciatis! Corporis?
          </p>

          <section className='flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32'>
            {/* Headlines */}

            <h2 className='text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100'>
              The Blogging Platform For Devs.
            </h2>
            <p className='text-xl sm:text-md text-center text-gray-500 dark:text-gray-200'>
              Start your developer blog,share ideas and connect with the Dev
              Community.
            </p>
            {/* CTA */}
            <button className='btn' type='button' onClick={() => {}}>
              {" "}
              Start Your Blog
            </button>
          </section>
        </div>
      </div>
      <div className=''>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
