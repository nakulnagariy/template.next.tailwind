import type { NextPage } from 'next';
import ManageYourExpense from '../components/ManageYourExpense/ManageYourExpense';

const ManageExpense: NextPage = () => {
  return (
    <>
      <section>
        <div className='w-11/12 mx-auto my-10'>
          <ManageYourExpense />
        </div>
      </section>
    </>
  );
};

export default ManageExpense;
