import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
  title: string;
  icon?: any;
  children?: ReactNode
}

export function Button(props: ButtonProps){

  return(
    <Container {...props}>
      {props.icon}
      {props.title}
    </Container>
  )
}