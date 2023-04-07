import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '../BrandLogos/BrandLogos';
import Logo from '../Logo/Logo';

interface FooterProps {
  // Define the props here
}

const Footer: React.FC<FooterProps> = (props) => {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const legal = ['Terms', 'Privacy', 'Legal'];
  return (
    <div className='relative'>
      <Container>
        <div className='grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <div>
              {' '}
              <Link href='/'>
                <a className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                  <span>
                    <Logo width={150} height={35}/>
                  </span>
                </a>
              </Link>
            </div>

            <div className='max-w-md mt-4 text-gray-500 dark:text-gray-400'>
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </div>
          </div>

          <div>
            <div className='flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0'>
              {navigation.map((item, index) => (
                <Link key={index} href='/'>
                  <a className='w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0'>
              {legal.map((item, index) => (
                <Link key={index} href='/'>
                  <a className='w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className=''>
            <div>Follow us</div>
            <div className='flex mt-5 space-x-5 text-gray-400 dark:text-gray-500'>
              <a
                href='https://twitter.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='sr-only'>Twitter</span>
                <Twitter />
              </a>
              <a
                href='https://facebook.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='sr-only'>Facebook</span>
                <Facebook />
              </a>
              <a
                href='https://instagram.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='sr-only'>Instagram</span>
                <Instagram />
              </a>
              <a
                href='https://linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'>
                <span className='sr-only'>Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className='my-10 text-sm text-center text-gray-600 dark:text-gray-400'>
          Copyright © {new Date().getFullYear()}. Made with ♥ by{' '}
          <a
            href='https://github.com/nakulnagariy'
            rel='noopener noreferrer'>
            Nakul Nagariya
          </a>{' '}
          Illustrations from Budget Manager
        </div>
      </Container>
    </div>
  );
};

export default Footer;
