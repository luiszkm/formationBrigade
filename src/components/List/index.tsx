import { ReactNode } from "react";
import { Container } from "./styles";


interface ListProps{
  children: ReactNode;
}

export function List (props: ListProps){


  return(
    <Container>
     {props.children}
    </Container>

  )
}