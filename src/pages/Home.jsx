import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import StorySection from "../components/StorySection"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Statistics from "../components/Statistics"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import HealthEducation from "../components/HealthEducation";
import GuideDetail from "./GuideDetail.jsx";

function Home() {
  return (
    <main className="bg-[#f8fbfc] overflow-hidden">
      <Navbar />
      <Hero />
      <StorySection />
      <Features />
      <HowItWorks />
      <Statistics />
      <HealthEducation />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home