import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";


export  function Home (){

  return(
    <Container>
      <Header/>
    <Card />
      <Footer/>
    </Container>
  )
}