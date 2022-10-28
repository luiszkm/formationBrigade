import { Link } from "react-router-dom";

import { Class1Intro } from "../../class/class1/class1-01Intro";
import { Class1Fire } from "../../class/class1/class1-02Fire";
import { Class1Extintor } from "../../class/class1/class1-03Extintor"
import { Class1Glp } from "../../class/class1/class1-04Gpl";
import { Aside } from "../../components/Aside";
import { Cover } from "../../components/Cover";


import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavPage } from "../../components/NavPage";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";
import { ToTop } from "../../components/ToTop";
import { Container } from "./styles";




export function ClassOne() {

  return (
    <Container>
      <Header />
      <main>
        <Section title="Programa de brigada de incêndio">
          <Class1Intro />
          <Class1Fire />
          <Class1Extintor />
          <Class1Glp />
          <NavPage />
        </Section>
        <Aside />
      </main>
      <Footer />
      <ToTop />

    </Container>
  )
}