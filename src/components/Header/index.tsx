import { SearchBar } from "../SearchBar";
import { Container } from "./styles";
import { GiExitDoor } from "react-icons/gi"
import { Link } from "react-router-dom";
export function Header() {


  return (
    <Container>
      <header>
        <h2>logo</h2>
        <SearchBar />
        <nav>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Contato</li></a>
          </ul>
        </nav>
        
        <Link to='login'>
          <GiExitDoor size={24} />
        </Link>
      </header>
    </Container>
  )
}