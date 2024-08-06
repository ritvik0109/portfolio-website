import Footer, { SmallFooter } from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Footer />
      {/* <SmallFooter /> */}
    </>
  );
}
