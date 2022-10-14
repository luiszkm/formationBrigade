import { Button } from "../Button";
import { Container, ClassInfo, ClassItem } from "./styles";

import { AiOutlinePlayCircle } from "react-icons/ai"
import { Link } from "react-router-dom";




export function Card() {

  return (
    <Container>

      <div>
        <div>
          <img src="http://www.delaplastic.com.br/wp-content/uploads/2018/03/Brig-emerg.png" alt="" />
          <div>
            <h2>Class title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, obcaecati. Quasi accusamus animi natus fuga nostrum, veniam itaque saepe deserunt ipsam voluptates non ipsa placeat, eaque molestias? Maiores, laborum ipsam!</p>
          </div>
        </div>

      </div>

      <ClassInfo>
        <div>
          <ClassItem>
            <strong>Duração</strong>
            <span>6h</span>
          </ClassItem>

          <ClassItem>
            <strong>Nível</strong>
            <span>Iniciante</span>
          </ClassItem>

        </div>
        <Link to='aula'>
          <Button icon={<AiOutlinePlayCircle size={20} />}
            title="Ir à aula">
          </Button>
        </Link>
      </ClassInfo>

    </Container>
  )
}