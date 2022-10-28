import { Link } from "react-router-dom";
import { Container } from "./styles";




export function NavPage(){

  return(
    <Container>
      <Link to='/aula'>1</Link>
      <Link to='/APH'>2</Link>
    </Container>
  )
}