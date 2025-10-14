import './App.css'
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import AnimatedText from "@/components/AnimatedText";
import HowItWorks from "@/components/HowItWorks";
import AllInOne from "@/components/AllInOne";
import BrandDNA from "@/components/BrandDNA";
import Footer from "@/components/Footer";

function App() {

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <SocialProof />
      <AnimatedText />
      <HowItWorks />
      <AllInOne />
      <BrandDNA />
      <Footer />
    </div>
  );
}

export default App
