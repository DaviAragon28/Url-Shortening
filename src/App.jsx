import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FirstSection } from "./containers/FirstSection";
import { SecondSection } from "./containers/SecondSection";
import { ThirdSection } from "./containers/ThirdSection";

export default function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>

  )
}