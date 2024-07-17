import Banner from "~/components/Home/Banner/Banner";
import Footer from "~/components/Home/Footer/Footer";
import Hero from "~/components/Home/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Banner />
      <main className="flex flex-col">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
