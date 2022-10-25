
import { Class2Intro } from "../../class/class2/class2-01Intro";
import { Class3Wounds } from "../../class/class2/Class2-03wounds";
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
          <Class3Wounds />
        </Section>

        <Aside />
      </main>
      <Footer />
    </Container>
  )
}