import { useEffect } from "react";
import Hero from "./Hero";
import NonHero from "./NonHero";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

export default function HomeView(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <div>
      <Hero />
      <div id="back-to-top-anchor"></div>
      <NonHero />
    </div>
  );
}
