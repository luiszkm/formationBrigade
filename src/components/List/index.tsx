import { ReactNode } from "react";
import { Container } from "./styles";


interface ListProps{
  children: ReactNode;
  img?: any
}

export function List (props: ListProps){


  return(
    <Container>
      <ul>
     {props.children}
      </ul>
      {props.img ?
        <img src={props.img} alt="" />: ''}
    </Container>

  )
}