import Hero from "./Hero";
import ScrollToTop from "../../utils/ScrollToTop";
import NonHero from "./NonHero";

export default function HomeView(props) {
  return (
    <div>
      <ScrollToTop />
      <Hero />
      <div id="back-to-top-anchor"></div>
      <NonHero />
    </div>
  );
}
