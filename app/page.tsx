import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-40 md:pt-52 pb-28 px-6 sm:px-10 md:px-24 lg:px-40 space-y-28 md:space-y-40">
        <Hero />
        <Bento />
        <Contact />
      </main>

      <Footer />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[50%] aspect-square bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] aspect-square bg-tertiary/10 blur-[150px] rounded-full" />
      </div>
    </>
  );
}
