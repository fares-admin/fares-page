import Head from "next/head"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const ContactUs = () => {
    return <>
     <Head>
        <title>Fares</title>
        <meta
          name="description"
          content="Fares was officially established with the ambition of providing solutions and services the hospitality, educations and e-commerces."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ContactForm/>
      <Footer/>
      </>
}

export default ContactUs