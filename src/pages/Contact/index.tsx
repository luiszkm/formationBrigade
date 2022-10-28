import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import contact from "../../assets/contact.svg"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

export function Contact (){

  return(
    <Container>
    <Header />
    <div>
      <ul>
        <li><AiOutlineWhatsApp /> (31) 98710-2181</li>
        <li><AiOutlineMail /> mrenildo@yahoo.com.br</li>
      </ul>
    </div>
    <img src={contact} alt="" />
    <Footer />
    </Container>
  )
}