import Banner from "~/components/Home/Banner/Banner";
import Footer from "~/components/Home/Footer/Footer";
import Hero from "~/components/Home/Hero/Hero";
import SideToken from "~/components/Home/SideToken/SideToken";

export default function HomePage() {
  return (
    <>
      <Banner />
      <main className="flex flex-col">
        <Hero />
        <SideToken />
      </main>
      <Footer />
    </>
  );
}
