import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  title: string;
  icon?: any;
  children?: ReactNode
}

export function Button(props: ButtonProps){

  return(
    <Container>
      {props.icon}
      {props.title}
    </Container>
  )
}