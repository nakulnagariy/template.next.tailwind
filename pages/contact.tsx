import React from "react";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className='flex flex-col w-11/12 mx-auto'>
      <section
        className='px-4 sm:px-6 lg:px-8'
        id='testimonials'
        aria-label='What our customers are saying'>
        <div className='md:text-center'>
          <h1 className='font-display text-5xl tracking-tight text-slate-700 dark:text-white sm:text-5xl mb-4'>
            {' '}
            Welcome to Contact Us page
          </h1>
          <h2 className='font-display text-3xl tracking-tight text-slate-700 dark:text-white sm:text-3xl'>
            Loved by businesses worldwide.
          </h2>
          <p className='mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 mt-16 lg:text-center lg:text-xl'>
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
