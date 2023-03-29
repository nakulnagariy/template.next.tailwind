import type { NextPage } from 'next';
import ManageYourExpenses from '../components/ManageYourExpense/ManageYourExpenses';

const ManageExpense: NextPage = () => {
  return (
    <>
      <section>
        <div className='w-11/12 mx-auto my-10'>
          <ManageYourExpenses />
        </div>
      </section>
    </>
  );
};

export default ManageExpense;
