import { Container } from "./styles";

export function Header (){


  return(
    <Container>
      <header>
        <h2>logo</h2>

        <nav>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Contato</li></a>
          </ul>
        </nav>
        
      </header>
    </Container>
  )
}