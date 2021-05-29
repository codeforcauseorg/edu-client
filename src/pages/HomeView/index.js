import { useEffect } from "react";
import { Plugins } from "@capacitor/core";
import HeaderSection from "../../components/HomeViewComponents/HeaderSection";
import FooterSection from "../../components/HomeViewComponents/FooterSection";
import Tags from "../../components/HomeViewComponents/Tags";
const { SplashScreen } = Plugins;

export default function HomeView(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <div>
      <HeaderSection />
      <Tags />
      <FooterSection />
    </div>
  );
}
