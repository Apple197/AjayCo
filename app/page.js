import Navbar from "./copmponents/navbar";
import Herosection from "./copmponents/herosection";
import Logos from "./copmponents/logos"
import Tools from "./copmponents/tools"
import Toolinfo2 from "./copmponents/toolinfo2"
import Trustedby from "./copmponents/trustedby";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection/>
      <Logos/>
      <Tools/>
      <Toolinfo2/>
      <Trustedby/>
    </>
  );
}
