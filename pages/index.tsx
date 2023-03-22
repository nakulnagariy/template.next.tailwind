import type { NextPage } from 'next';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import Hero from '../components/Hero/Hero';

const categories = [
  { id: 1, name: 'investmanet' },
  { id: 2, name: 'food' },
  { id: 3, name: 'rent' },
  { id: 4, name: 'attire' },
  { id: 5, name: 'grocery' },
  { id: 6, name: 'salary' },
];
const Home: NextPage = () => {
  return (
    <>
      <section>
        <div className='w-11/12 mx-auto'>
          <AddExpenseForm categories={categories} />
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
