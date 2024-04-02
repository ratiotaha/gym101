import About from "@/components/About";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      
      <Membership />
      
      <Brands />
    </main>
  );
}
