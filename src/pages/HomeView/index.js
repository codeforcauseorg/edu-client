import React from "react";
import Hero from "./Hero";
import NonHero from "./NonHero";
import Recommended from "./courses/Recommended";
import Search from "./Search";

export default function HomeView() {
  return (
    <div>
      <Hero />
      <NonHero />
      <Search />
      <Recommended />
    </div>
  );
}
