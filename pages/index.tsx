import type { NextPage } from "next";
import Login from "../components/Login/Login";

const Home: NextPage = () => {
  return (
    <section id='testimonials' aria-label='What our customers are saying'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl md:text-center '>
          <h1 className='font-display text-5xl tracking-tight text-slate-700 dark:text-white sm:text-5xl mb-4'>
            {" "}
            Welcome to home page
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
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'>
          <li>
            <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
              <li>
                <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                  <blockquote className='relative'>
                    <p className='text-lg tracking-tight text-slate-900'>
                      I’m trying to get a hold of someone in support, I’m in a
                      lot of trouble right now and they are saying it has
                      something to do with my books. Please get back to me right
                      away.
                    </p>
                  </blockquote>
                  <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                    <div>
                      <div className='font-display text-base text-slate-900'>
                        Amy Hahn
                      </div>
                      <div className='mt-1 text-sm text-slate-500'>
                        Director at Velocity Industries
                      </div>
                    </div>
                    <div className='overflow-hidden rounded-full bg-slate-50'></div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
              <li>
                <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                  <svg
                    aria-hidden='true'
                    width='105'
                    height='78'
                    className='absolute top-6 left-6 fill-slate-100'>
                    <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z'></path>
                  </svg>
                  <blockquote className='relative'>
                    <p className='text-lg tracking-tight text-slate-900'>
                      The best part about TaxPal is every time I pay my
                      employees, my bank balance doesn’t go down like it used
                      to. Looking forward to spending this extra cash when I
                      figure out why my card is being declined.
                    </p>
                  </blockquote>
                  <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                    <div>
                      <div className='font-display text-base text-slate-900'>
                        Leland Kiehn
                      </div>
                      <div className='mt-1 text-sm text-slate-500'>
                        Founder of Kiehn and Sons
                      </div>
                    </div>
                    <div className='overflow-hidden rounded-full bg-slate-50'></div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                  <blockquote className='relative'>
                    <p className='text-lg tracking-tight text-slate-900'>
                      This is the fourth email I’ve sent to your support team. I
                      am literally being held in jail for tax fraud. Please
                      answer your damn emails, this is important.
                    </p>
                  </blockquote>
                  <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                    <div>
                      <div className='font-display text-base text-slate-900'>
                        Amy Hahn
                      </div>
                      <div className='mt-1 text-sm text-slate-500'>
                        Director at Velocity Industries
                      </div>
                    </div>
                    <div className='overflow-hidden rounded-full bg-slate-50'></div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
