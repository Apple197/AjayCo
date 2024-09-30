import Navbar from "./copmponents/navbar";
import Herosection from "./copmponents/herosection";
import Logos from "./copmponents/logos";
import Tools from "./copmponents/tools";
import Toolinfo2 from "./copmponents/toolinfo2";
import Trustedby from "./copmponents/trustedby";
import Pricing from "./copmponents/pricing";
import Accordian from "./copmponents/accordian";
import Trial from "./copmponents/trial";
import Footer from "./copmponents/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Logos />
      <Tools />

      <Trustedby />
      <Pricing />
      <Accordian />
      <Trial />
      <Footer />
    </>
  );
}
