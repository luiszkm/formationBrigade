import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, SectionGrid } from "./styles";

const allClass =[
  {
    title: "NBR 14276",
    link: "aula",
    description: "A nova NBR 14276:2020 traz em seu escopo os requisitos e procedimentos para composição, treinamento e atividades das brigadas de emergência de incêndio, para proteger a vida e o patrimônio, bem como para reduzir as consequências sociais e os danos ao meio ambiente",
    level: "Iniciante",
    duration: "6h",
  },
  {
    title: "APH Treinamento",
    link: "APH",
    description: "O atendimento pré-hospitalar (APH) é aquele que procura socorrer a vítima nos primeiros minutos após ter ocorrido o agravo à sua saúde. É toda assistência realizada fora do âmbito hospitalar, seja de maneira direta ou indireta, por meio dos recursos disponíveis.",
    level: "Iniciante",
    duration: "6h",
  }
]
export  function Home (){

  return(
    <Container>
      <Header/>
      <SectionGrid>

   { allClass &&
   allClass.map(content =>(
     <Card content={content} />
     ))
    }
    </SectionGrid>
      <Footer/>
    </Container>
  )
}