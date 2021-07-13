import React from "react";

import { Container } from "@material-ui/core";
import DashboardHero from "./DashboardHero";
import DoubtsSection from "./DoubtsSection";
function MainSection() {
  return (
    <Container disableGutters>
      <DashboardHero />
      <DoubtsSection />
    </Container>
  );
}

export default MainSection;
