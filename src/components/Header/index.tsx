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
            <Link to='/'><li>Home</li></Link>
            <Link to='/'><li>Contato</li></Link>
          </ul>
        </nav>

        <Link to='login'>
          <GiExitDoor size={24} />
        </Link>
      </header>
    </Container>
  )
}