import type { NextPage } from 'next';
import ManageYourExpenses from '../components/ManageYourExpense/ManageYourExpenses';

const ManageExpense: NextPage = () => {
  return (
    <>
      <section>
        <ManageYourExpenses />
      </section>
    </>
  );
};

export default ManageExpense;
