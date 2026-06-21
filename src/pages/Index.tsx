import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;
