import type { NextPage } from 'next';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import Hero from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <div className='w-11/12 mx-auto'>
          <AddExpenseForm />
        </div>
        <Hero
          imageSrc='/wallet.jpg'
          ctaLink='/add-new-expense'
          ctaText='Add new Expense'
        />
      </section>
    </>
  );
};

export default Home;
