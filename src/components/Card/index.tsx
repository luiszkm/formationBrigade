import { Button } from "../Button";
import { Container, ClassInfo, ClassItem } from "./styles";

import { AiOutlinePlayCircle } from "react-icons/ai"
import { Link } from "react-router-dom";


interface CardProps {
  content:{
    title: string,
    link: string,
    description: string,
    duration: string,
    level: string,

  }
}

export function Card(props: CardProps) {

  return (
    <Container>

      <div>
        <div>
          <img src="http://www.delaplastic.com.br/wp-content/uploads/2018/03/Brig-emerg.png" alt="" />
          <div>
            <h2>{props.content.title}</h2>
            <p>{props.content.description}</p>
          </div>
        </div>

      </div>

      <ClassInfo>
        <div>
          <ClassItem>
            <strong>Duração</strong>
            <span>{props.content.duration}</span>
          </ClassItem>

          <ClassItem>
            <strong>Nível</strong>
            <span>{props.content.level}</span>
          </ClassItem>

        </div>
        <Link to={props.content.link}>
          <Button icon={<AiOutlinePlayCircle size={20} />}
            title="Ir à aula">
          </Button>
        </Link>
      </ClassInfo>

    </Container>
  )
}