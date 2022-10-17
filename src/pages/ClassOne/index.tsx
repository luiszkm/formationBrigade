import { Link } from "react-router-dom";
import { Class1Fire } from "../../class/class1-Fire";
import { Class1Intro } from "../../class/class1-Intro";
import { Cover } from "../../components/Cover";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";
import { Container } from "./styles";




export function ClassOne() {

  return (
    <Container>
      <Header />
      <main>
        <Section title="Programa de brigada de incêndio">
         <Class1Intro />
         <Class1Fire />
        </Section>


      </main>
      <Footer />
    </Container>
  )
}