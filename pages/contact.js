import Head from "next/head"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const ContactUs = () => {
    return <>
     <Head>
        <title>Contact us - Fares is providing solutions and services the hospitality, educations and e-commerces.</title>
        <meta
          name="description"
          content="Fares was officially established with the ambition of providing solutions and services the hospitality, educations and e-commerces."
        />
        <meta
          name="og:description"
          content="Fares was officially established with the ambition of providing solutions and services the hospitality, educations and e-commerces."
        />
        <meta
          name="og:title"
          content="Contact us - Fares is providing solutions and services the hospitality, educations and e-commerces."
        />
        <meta property="og:image" content="/img/FARES.png" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href="/img/FARES.png" />
      </Head>

      <Navbar />
      <ContactForm/>
      <Footer/>
      </>
}

export default ContactUs