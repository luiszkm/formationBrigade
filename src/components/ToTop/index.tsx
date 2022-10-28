import { AiOutlineRocket } from "react-icons/ai";
import { Container } from "./styles";



export function ToTop (){

  return(
    <Container>
      <a href="#main">
        <AiOutlineRocket size={24} color={"#92000E"}/>
      </a>
    </Container>
  )
}