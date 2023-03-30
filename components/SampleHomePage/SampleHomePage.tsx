import Hero from "./hero";
import Navbar from "./navbar";
import SectionTitle from "./sectionTitle";

import { benefitOne, benefitTwo } from "./data";
import Benefits from "./benefits";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Cta from "./cta";
import Faq from "./faq";
import PopupWidget from "./popupWidget";

export default function SampleHomePage() {
    return (
      <>  
        <Navbar />
        <Hero />
        <SectionTitle
          pretitle="Nextly Benefits"
          title=" Why should you use this landing page">
          Nextly is a free landing page & marketing website template for startups
          and indie projects. Its built with Next.js & TailwindCSS. And its
          completely open-source.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle
          pretitle="Watch a video"
          title="Learn how to fullfil your needs">
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <Cta />
        <Footer />
        <PopupWidget />
      </>
    );
  }