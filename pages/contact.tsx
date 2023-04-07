import React from 'react';
import { NextPage } from 'next';
import Container from '../components/Container/Container';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const Contact: NextPage = () => {
  return (
    <Container>
      <SectionTitle
        pretitle='Contact Us'
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
    </Container>
  );
};

export default Contact;
