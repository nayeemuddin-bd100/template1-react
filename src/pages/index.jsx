import Contact from '../components/contact';
import Faq from '../components/faq';
import Features from '../components/features';
import Footer from '../components/footer';
import Heading from '../components/heading-part';
import MoreDetails from '../components/more-details';
import Nav from '../components/nav';
import Offer from '../components/offer';
import Pricing from '../components/pricing';
import Testimonials from '../components/testimonials';



function Page() {
    return (
      <div>            

        {/*  ===============START=======================  */}
        

        <header className="hero container-fluid border-bottom">
          {/* Navigation Bar */}
          <Nav />


          {/* Heading Part  */}
          <Heading />

        </header>

        <Features/>

        <MoreDetails />
  
        <Testimonials />

        <Pricing/>

        <Faq />


        <Contact />


        <Offer />


        <Footer />

  {/*  ================END=================== */}
      </div>
    );
}

export default Page;