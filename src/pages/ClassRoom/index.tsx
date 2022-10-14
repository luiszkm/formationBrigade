import { Link } from "react-router-dom";
import { Cover } from "../../components/Cover";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";




export function ClassRoom() {

  return (
    <Container>
      <Header />
      <section>
      <Cover/>

        <aside>
          <nav>
            <ul>
              <Link to='#'><li>Aula 1</li></Link>
              <Link to='#'><li>Aula 2</li></Link>
              <Link to='#'><li>Aula 3</li></Link>
              <Link to='#'><li>Aula 4</li></Link>
            </ul>
          </nav>
        </aside>
      </section>
      <Footer />
    </Container>
  )
}