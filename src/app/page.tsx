import About from "@/components/About";
import Baked from "@/components/Baked";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NeighbourhoodSection from "@/components/NeighbourhoodSection";
import PlaylistMarquee from "@/components/PlaylistMarquee";
import VisitSection from "@/components/VisitSection";
import WeatherAndCounter from "@/components/WeatherAndCounter";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Coffee />
      <Baked />
      <NeighbourhoodSection />
      <WeatherAndCounter />
      <PlaylistMarquee />
      <VisitSection />
      <Footer />
    </main>
  );
}
