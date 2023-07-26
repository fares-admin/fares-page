import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fares</title>
        <meta
          name="description"
          content="Fares was officially established with the ambition of providing solutions and services the hospitality, educations and e-commerces."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Fares Benefits"
        title=" Why should you choose our services">
        Fares is providing high quality technology services and solutions. We can accurately analyze and advise customers.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      Below are frequently asked questions about us. If you have any other questions, please message us via our fanpage.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;