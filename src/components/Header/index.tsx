import { SearchBar } from "../SearchBar";
import { Container } from "./styles";
import { GiExitDoor } from "react-icons/gi"
import { Link } from "react-router-dom";


import logo from "../../assets/logo.svg"


export function Header() {


  return (
    <Container>
      <header>
        <img src={logo} alt="" />
        
        <SearchBar />
        <nav>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/contact'><li>Contato</li></Link>
          </ul>
        </nav>

        <Link to='/login'>
          <GiExitDoor size={24} />
        </Link>
      </header>
    </Container>
  )
}