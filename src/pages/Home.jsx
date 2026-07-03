import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Opportunity from "../components/Opportunity";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Opportunity />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;