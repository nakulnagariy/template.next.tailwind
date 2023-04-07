import type { NextPage } from 'next';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { benefitOne, benefitTwo } from '../components/utils/data';
import Benefits from '../components/Benifits/Benifits';
import Testimonials from '../components/Testimonials/Testimonials';
import Cta from '../components/Cta/Cta';
import Faq from '../components/Faq/Faq';
import PopupWidget from '../components/PopupWidget/PopupWidget';
import Container from '../components/Container/Container';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <AddExpenseForm />
      </Container>
      <SectionTitle
        pretitle='Our Benefits'
        title=' Why should you use our Budget Manager'>
        Budget Manager is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos='right' data={benefitTwo} />
      <SectionTitle
        pretitle='Testimonials'
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <PopupWidget />
    </>
  );
};

export default Home;
