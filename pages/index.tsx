import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../components/Navbar/Footer";
import MainNav from "../components/Navbar/MainNav";
import SideNav from "../components/Navbar/SideNav";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col relative mt-20'>
      <MainNav />
      <div className='flex'>
        <SideNav />
        <div className='px-5'>
          <h1 className='text-3xl font-bold underline'>Hello world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            corrupti fugiat voluptates similique aut iure cum consectetur,
            expedita omnis! Aliquam quidem eveniet culpa quas aspernatur
            deserunt inventore dolore perspiciatis! Corporis?
          </p>
        </div>
      </div>
      <div className=''>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
