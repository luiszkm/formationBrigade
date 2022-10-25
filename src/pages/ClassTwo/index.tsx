
import { Class2Intro } from "../../class/class2/class2-01Intro";
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
        </Section>


      </main>
      <Footer />
    </Container>
  )
}