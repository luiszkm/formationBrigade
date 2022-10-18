import { ReactNode } from "react";
import { Container } from "./styles";


interface ListProps{
  children: ReactNode;
  img?: any;
  className?: string;
}

export function List (props: ListProps){


  return(
    <Container className={props.className}>
      <ul>
     {props.children}
      </ul>
      {props.img ?
        <img src={props.img} alt="" />: ''}
    </Container>

  )
}