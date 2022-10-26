
import { Class2Intro } from "../../class/class2/class2-01Intro";
import { Class2Ovace } from "../../class/class2/class2-02Ovace";
import { Class2Wounds } from "../../class/class2/class2-03wounds";
import { Class2Fracture } from "../../class/class2/class2-04Fracture";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container } from "./styles";




export function ClassTwo() {

  return (
    <Container>
      <Header />
      <main>
        <Section title="APH Treinamento">
          <Class2Intro />
          <Class2Ovace />
          <Class2Wounds />
          <Class2Fracture />
          
        </Section>

        <Aside />
      </main>
      <Footer />
    </Container>
  )
}