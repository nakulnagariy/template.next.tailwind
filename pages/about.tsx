import { NextPage } from 'next';
import Container from '../components/Container/Container';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const About: NextPage = () => {
  return (
    <Container>
      <SectionTitle
        pretitle='About Us'
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
    </Container>
  );
};

export default About;
