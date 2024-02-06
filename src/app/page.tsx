import Navigation from "@/app/components/Navigation";
import Banner from "@/app/components/Banner";
import Carsolsecond from "@/app/components/Carsolsecond";
import Footer from "@/app/components/Footer";
import BannerSecond from "@/app/components/BannerSecond";
import AcademicCard from "@/app/components/AcademicCard";
import Stagesection from "@/app/components/Stagesection";
import RevolutionCardone from "@/app/components/RevolutionCardone";
import Carsolmain from "@/app/components/Carsolmain";
import CardCarousel from "@/app/components/CardCarousel";
import Accordion from "@/app/components/Accordion"
import TopAccordion from "./components/TopAccordion";


export default function Home() {
  return (
    <>
      <Banner />
      <Navigation />
      <Carsolmain />
      <Carsolsecond />  
      <CardCarousel />
      <Stagesection />
      <AcademicCard />
      <TopAccordion/> 
      <RevolutionCardone />
      <Accordion/>
      <BannerSecond />
      <Footer />
    </>
  );
}
