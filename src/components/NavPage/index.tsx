import { Link } from "react-router-dom";
import { Container } from "./styles";




export function NavPage(){

  function handleNextPage(){
    window.scroll(0,0)
  }

  return(
    <Container>
      <Link to='/aula' onClick={handleNextPage}>1</Link>
      <Link to='/APH'  onClick={handleNextPage}>2</Link>
    </Container>
  )
}