import type { NextPage } from 'next';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import Hero from '../components/Hero/Hero';
import SampleHomePage from '../components/SampleHomePage/SampleHomePage';

const Home: NextPage = () => {
  return (
    <>
      {/* <section>
        <div className='w-11/12 mx-auto'>
          <AddExpenseForm />
        </div>
        <Hero
          imageSrc='/wallet.jpg'
          ctaLink='/add-new-expense'
          ctaText='Add new Expense'
        />
      </section> */}
      <SampleHomePage />
    </>
  );
};

export default Home;
