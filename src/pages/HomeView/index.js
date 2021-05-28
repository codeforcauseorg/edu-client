import { useEffect } from "react";
import { Plugins } from "@capacitor/core";
import NavBar from "../../components/NavBar";
import HeaderSection from "../../components/HomeViewComponents/HeaderSection";
import FooterSection from "../../components/HomeViewComponents/FooterSection";
const { SplashScreen } = Plugins;

export default function HomeView(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <div>
      <NavBar />
      <HeaderSection />
      <FooterSection />
    </div>
  );
}
